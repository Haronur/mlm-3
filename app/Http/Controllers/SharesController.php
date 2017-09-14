<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\SharesRepository;

class SharesController extends Controller
{
    /**
     * The SharesRepository instance.
     *
     * @var \App\Repositories\SharesRepository
     */
    protected $SharesRepository;

    /**
     * Create a new SharesController instance.
     *
     * @param \App\Repositories\SharesRepository $SharesRepository
     * @return void
     */
    public function __construct(SharesRepository $SharesRepository) {
        $this->SharesRepository = $SharesRepository;
        $this->middleware('member');
    }

    /**
     * Member buy shares
     * @return [type] [description]
     */
    public function buy () {
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
            $this->SharesRepository->buyShares($member, $data['quantity'], $data['price']);
        } catch (\Exception $e) {
            return \Response::json([
                'type'  =>  'error',
                'message'   =>  $e->getMessage()
            ]);
        }

        \Cache::forget('member.' . $user->id);

        return \Response::json([
            'type'  =>  'success',
            'message'   =>  \Lang::get('message.sharesBuySuccess')
        ]);
    }

    /**
     * Member sell shares
     * @return [type] [description]
     */
    public function sell () {
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
            $this->SharesRepository->sellShares($member, $data['quantity'], $data['price']);
        } catch (\Exception $e) {
            return \Response::json([
                'type'  =>  'error',
                'message'   =>  $e->getMessage()
            ]);
        }

        \Cache::forget('member.' . $user->id);

        return \Response::json([
            'type'  =>  'success',
            'message'   =>  \Lang::get('message.sharesSellSuccess')
        ]);
    }

    /**
     * All sales shares/self - DataTable
     * @return [type] [description]
     */
    public function getSellList () {
        $user = \Sentinel::getUser();
        $member = $user->member;
        return $this->SharesRepository->sellList($member);
    }

    /**
     * All sales shares/public- DataTable
     * @return [type] [description]
     */
    public function getSellListPublic () {
        return $this->SharesRepository->sellListPublic();
    }

    /**
     * All purchase shares - DataTable
     * @return [type] [description]
     */
    public function getBuyList () {
        $user = \Sentinel::getUser();
        $member = $user->member;
        return $this->SharesRepository->buyList($member);
    }

    /**
     * All freeze shares - DataTable
     * @return [type] [description]
     */
    public function getFreezeList () {
        $user = \Sentinel::getUser();
        $member = $user->member;
        return $this->SharesRepository->freezeList($member);
    }

    /**
     * Get Sales Statement
     * @param integer $id [sales id]
     * @return html
     */
    public function getSalesStatement ($lang, $id) {
        return view('front.shares.sellStatement')->with('id', trim($id));
    }

    /**
     * Get Return Statement
     * @return html
     */
    public function getReturnList ($lang) {
        $user = \Sentinel::getUser();
        $member = $user->member;
        return $this->SharesRepository->returnList($member);
    }

    /**
     * Get Split Statement
     * @return html
     */
    public function getSplitList ($lang) {
        $user = \Sentinel::getUser();
        $member = $user->member;
        return $this->SharesRepository->splitList($member);
    }
}
