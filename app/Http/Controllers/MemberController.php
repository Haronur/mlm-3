<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\NetworkAfterRegisterJob;
use App\Jobs\SharesAfterRegisterJob;
use App\Repositories\MemberRepository;
use App\Repositories\SharesRepository;

class MemberController extends Controller
{
    /**
     * The MemberRepository instance.
     *
     * @var \App\Repositories\MemberRepository
     */
    protected $MemberRepository;

    /**
     * The SharesRepository instance.
     *
     * @var \App\Repositories\SharesRepository
     */
    protected $SharesRepository;

    /**
     * Create a new MemberController instance.
     *
     * @param \App\Repositories\MemberRepository $MemberRepository
     * @return void
     */
    public function __construct(
        MemberRepository $MemberRepository,
        SharesRepository $SharesRepository
    ) {
        $this->MemberRepository = $MemberRepository;
        $this->SharesRepository = $SharesRepository;
        $this->middleware('member', ['except' => ['postLogin']]);
    }

    /**
     * Login
     * @return [type] [description]
     */
    public function postLogin () {
        $data = \Input::get('data');

        try {
            $user = \Sentinel::authenticate([
                'username'  =>  $data['username'],
                'password'  =>  $data['password']
            ], (isset($data['remember'])));

            if (!$user) {
                throw new \Exception(\Lang::get('error.loginError'), 1);
                return false;
            }

            $permissions = $user->permissions;
            if (!isset($permissions['member'])) {
                throw new \Exception(\Lang::get('error.userError'), 1);
                return false;
            } else if ($permissions['member'] != 1) {
                throw new \Exception(\Lang::get('error.userError'), 1);
                return false;
            }

            if ($user->is_ban) {
                throw new \Exception(\Lang::get('error.userBan'), 1);
                return false;
            }
        } catch (\Exception $e) {
            \Sentinel::logout();
            return \Response::json([
                'type'  =>  'error',
                'message'   =>  $e->getMessage()
            ]);
        }

        return \Response::json([
            'type'      =>  'success',
            'message'   =>  \Lang::get('message.loginSuccess'),
            'redirect'  =>  route('home', ['lang' => \App::getLocale()])
        ]);
    }

    /**
     * Register new member
     * @return [type] [description]
     */
    public function postRegister () {
        $data = \Input::get('data');
        $user = \Sentinel::getUser();
        $currentMember = $user->member;

        if (!isset($data['terms'])) {
            return \Response::json([
                'type'  =>  'error',
                'message'   =>  \Lang::get('error.termsError')
            ]);
        }

        if ($currentMember->secret_password != trim($data['s'])) {
            return \Response::json([
                'type'  =>  'error',
                'message'   =>  \Lang::get('error.securityPasswordError')
            ]);
        }

        try {
            $member = $this->MemberRepository->register($data, $currentMember);
        } catch (\Exception $e) {
            return \Response::json([
                'type'  =>  'error',
                'message'   =>  $e->getMessage()
            ]);
        }
        
        if (env('APP_ENV') == 'local') { // local
            $wallet = $member->wallet;
            // $this->MemberRepository->addNetwork($member);
            $this->SharesRepository->repurchasePackage($member, $wallet->purchase_point, $wallet);
        } else { // production
            dispatch(new SharesAfterRegisterJob($member))->onQueue('queue-shares-register');
            // dispatch(new NetworkAfterRegisterJob($member))->onQueue('queue-network-register');
        }

        \Cache::forget('member.' . $user->id);
        session(['last_member_register' => $member]);

        return \Response::json([
            'type'  => 'success',
            'message' => \Lang::get('message.registerSuccess'),
            'redirect' => route('member.registerSuccess', ['lang' => \App::getLocale()])
        ]);
    }

    /**
     * Update Account Settings
     * @return [type] [description]
     */
    public function postUpdateAccount () {
        $data = \Input::get('data');
        $user = \Sentinel::getUser();
        $member = $user->member;

        if (isset($data['s'])) {
            if ($member->secret_password != $data['s']) {
                return \Response::json([
                    'type'  =>  'error',
                    'message'   =>  \Lang::get('error.securityPasswordError')
                ]);
            }
        }

        $detail = $member->detail;
        $userData = [];

        if (isset($data['password'])) {
            if ($data['password'] != '') {
                $userData['password'] = $data['password'];
            }
        }

        if (isset($data['first_name'])) {
            if ($data['first_name'] != '') {
                $userData['first_name'] = $data['first_name'];
            }
        }

        if (count($userData) > 0) {
            \Sentinel::update($user, $userData);
        }

        foreach ($detail->getAttributes() as $k => $d) {
            if (isset($data[$k])) $detail->{$k} = $data[$k];
        }

        if (isset($data['secret_password'])) {
            if ($data['secret_password'] != '') {
                $member->secret_password = $data['secret_password'];
            }
        }

        $detail->save();
        $member->save();
        \Cache::forget('member.'. $user->id);

        return \Response::json([
            'type'  =>  'success',
            'message'   =>  \Lang::get('message.accountUpdateSuccess')
        ]);
    }

    /**
     * Renew or upgrade package
     * @return [type] [description]
     */
    public function postUpgrade () {
        $data = \Input::get('data');
        $user = \Sentinel::getUser();
        $member = $user->member;

        if ($member->secret_password != trim($data['s'])) {
            return \Response::json([
                'type'  =>  'error',
                'message'   =>  \Lang::get('error.securityPasswordError')
            ]);
        }

        try {
            $member = $this->MemberRepository->upgrade($member, $data);
        } catch (\Exception $e) {
            return \Response::json([
                'type'  =>  'error',
                'message'   =>  $e->getMessage()
            ]);
        }

        if (env('APP_ENV') == 'local') { // local
            $wallet = $member->wallet;
            $this->SharesRepository->repurchasePackage($member, $wallet->purchase_point, $wallet);
        } else { // production
            dispatch(new SharesAfterRegisterJob($member))->onQueue('queue-shares-register');
        }

        \Cache::forget('member.' . $user->id);

        return \Response::json([
            'type'  =>  'success',
            'message'   =>  \Lang::get('message.upgradeSuccess')
        ]);
    }

    /**
     * Get all direct members - DataTable
     * @return [type] [description]
     */
    public function getRegisterHistory () {
        $user = \Sentinel::getUser();
        $member = $user->member;
        return $this->MemberRepository->registerHistory($member);
    }

    /**
     * Get Member detail from binary - VisJS
     * @return html
     */
    public function getUnilevelModal () {
        if (!\Input::has('u')) {
            return \Lang::get('error.binarySessionError');
        } else {
            $username = trim(\Input::get('u'));
            if (!$target = $this->MemberRepository->findByUsername(trim($username))) {
                return \Lang::get('error.memberNotFound');
            }
        }

        $user = \Sentinel::getUser();
        $member = $user->member;
        if ($target->level <= $member->level && $member->username != $target->username) {
            return \Lang::get('error.memberNotFound');
        }

        return view('front.network.unilevelModal')->with('model', $target);
    }

    /**
     * Search Unilevel Tree - VisJS
     * @return array [array of children]
     */
    public function getUnilevel () {
        $user = \Sentinel::getUser();
        $member = $user->member;

        $data = [
            'nodes' => [],
            'edges' => []
        ];

        if (\Input::has('data')) {
            $formData = \Input::get('data');
            if (trim($formData['s']) != $member->secret_password) {
                return \Response::json([
                    'type'  =>  'error',
                    'message'   =>  \Lang::get('error.securityPasswordError')
                ]);
            }

            if (!$target = $this->MemberRepository->findByUsername(trim($formData['u']))) {
                return \Response::json([
                    'type'  =>  'error',
                    'message'   => \Lang::get('error.memberNotFound')
                ]);
            }

            if ($target->level <= $member->level && $member->username != $target->username) {
                return \Response::json([
                    'type'  =>  'error',
                    'message'   =>  \Lang::get('error.memberNotFound')
                ]);
            }
        } else $target = $member;

        array_push($data['nodes'], [
            'id' => $target->id,
            'group' => 'main',
            'label' => $target->username
        ]);

        $children = $this->MemberRepository->findDirect($target);

        if (count($children) > 0) {
            foreach ($children as $child) {
                array_push($data['nodes'], [
                    'id' => $child->id,
                    'label' =>  $child->username,
                    'group' => 'child'
                ]);

                array_push($data['edges'], [
                    'from' => $target->id,
                    'to' => $child->id
                ]);

                // $grandChildren = $this->MemberRepository->findDirect($child);

                // if (count($grandChildren) > 0) {
                //     foreach ($grandChildren as $gc) {
                //         array_push($data['nodes'], [
                //             'id' => $gc->id,
                //             'label' =>  $gc->username,
                //             'group' => 'child'
                //         ]);

                //         array_push($data['edges'], [
                //             'from' => $child->id,
                //             'to' => $gc->id
                //         ]);
                //     }
                // }
            }
        }

        return \Response::json([
            'type' => 'success',
            'data' => $data
        ]);
    }

    /**
     * Find member info when register
     * @return html
     */
    public function getMemberRegisterModal () {
        $model = false;
        if (trim(\Input::get('u')) != '') {
            $model = $this->MemberRepository->findByUsername(trim(\Input::get('u')));
        }
        return view('front.member.modalRegister')->with('model', $model);
    }
}
