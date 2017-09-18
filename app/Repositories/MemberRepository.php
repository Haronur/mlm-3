<?php

namespace App\Repositories;

use App\Models\Member;
use App\Models\MemberDetail;
use App\Models\MemberWallet;
use App\Models\MemberShares;
use App\Models\MemberFreezeShares;
use App\Repositories\PackageRepository;
use App\Repositories\BonusRepository;
use Yajra\Datatables\Facades\Datatables;
use Carbon\Carbon;

class MemberRepository extends BaseRepository
{
    protected $model, $detailModel, $walletModel, $sharesModel, $freezeSharesModel;
    protected $allowedFields = [];
    protected $booleanFields = [];

    public function __construct() {
        $this->model = new Member;
        $this->detailModel = new MemberDetail;
        $this->walletModel = new MemberWallet;
        $this->sharesModel = new MemberShares;
        $this->freezeSharesModel = new MemberFreezeShares;
    }

    public function saveModel($model, $data) {
        foreach ($data as $k=>$d) {
            $model->{$k} = $d;
        }
        $model->save();
        return $model;
    }

    public function store($data) {
        $model = $this->saveModel(new $this->model, $data);
        return $model;
    }

    public function update($model, $data) {
        $model = $this->saveModel($model, $data);
        return $model;
    }

    public function getAllowedFields () {
        return $this->allowedFields;
    }

    public function getBooleanFields () {
        return $this->booleanFields;
    }

    public function findById ($id) {
        return $this->model->where('id', $id)->first();
    }

    /**
     * Find by username
     * @param  string $username
     * @return object
     */
    public function findByUsername ($username) {
        return $this->model->where('username', trim($username))->first();
    }

    /**
     * Find children (not direct)
     * @param  App\Models\Member $member
     * @return object
     */
    public function findChildren ($member) {
        // return $this->model->where('parent_id', $member->id)->get();
        $children = \Cache::remember('member.' . $member->id . '.children', 3600, function () use ($member) {
            return $this->model->where('parent_id', $member->id)->orderBy('position', 'asc')->get();
        });
        return $children;
    }

    /**
     * Find direct downline
     * @param  App\Models\Member $member
     * @return object
     */
    public function findDirect ($member) {
        return $this->model->where('direct_id', $member->id)->get();
    }

    /**
     * All Members - DataTable
     * @param  boolean $table
     * @return object
     */
    public function findAll ($table=false) {
        if (!$table) return $this->model->all();
        else {
            return Datatables::eloquent($this->model->query())
                ->addColumn('action', function ($model) {
                    return view('back.member.action')->with('model', $model);
                })
                ->editColumn('direct', function ($model) {
                    if ($direct = $model->direct()) return $direct->username;
                    else return 'Member not found.';
                })
                ->editColumn('package_amount', function ($model) {
                    return number_format($model->package_amount, 2);
                })
                ->make(true);
        }
    }

    /**
     * All Member Wallets - DataTable
     * @param  boolean $table
     * @return object
     */
    public function findWalletList ($table=false) {
        if (!$table) return $this->walletModel->all();
        else {
            return Datatables::eloquent($this->walletModel->with('member')->select(['member_id', 'cash_point', 'register_point', 'promotion_point', 'purchase_point', 'created_at']))
                ->addColumn('username', function ($model) {
                    if ($member = $model->member) {
                        return $member->username;
                    } else return 'Member Not Found.';
                })
                ->addColumn('action', function ($model) {
                    return view('back.wallet.action')->with('model', $model);
                })
                ->editColumn('cash_point', function ($model) {
                    return number_format($model->cash_point, 2);
                })
                ->editColumn('register_point', function ($model) {
                    return number_format($model->register_point, 2);
                })
                ->editColumn('promotion_point', function ($model) {
                    return number_format($model->promotion_point, 2);
                })
                ->editColumn('purchase_point', function ($model) {
                    return number_format($model->purchase_point, 2);
                })
                ->make(true);
        }
    }

    /**
     * Register Member
     * @param  array $data
     * @param  App\Models\Member $currentMember
     * @return boolean
     */
    public function register ($data, $currentMember=null) {
        $packageRepo = new PackageRepository;
        if (!$package = $packageRepo->findById($data['package_id'])) {
            throw new \Exception(\Lang::get('error.packageNotFound'), 1);
            return false;
        }

        if (is_null($currentMember)) {
            $currentUser = \Sentinel::getUser();
            $currentMember = $currentUser->member;
        }
        $currentMemberWallet = $currentMember->wallet;

        if (!$updatedWallet = $this->checkRegisterFunds($currentMemberWallet, $package, $data['point_amount'])) {
            throw new \Exception(\Lang::get('error.registerNotEnough'), 1);
            return false;
        }

        $user = \Sentinel::registerAndActivate([
            'email'   => $data['email'],
            'username'  =>  $data['username'],
            'first_name' => $data['name'],
            'password'  =>  $data['password'],
            'permissions' =>  [
                'member' => true,
            ]
        ]);

        if (!$member = $this->saveModel($this->model, [
            'username'  =>  $user->username,
            'register_by' => $currentMember->username,
            'secret_password' => $data['secret'],
            'user_id'   =>  $user->id,
            'package_id'    =>  $package->id,
            'direct_id' =>  $currentMember->id,
            'direct_percent'    =>  $package->direct_percent,
            'group_level'   =>  $package->group_level,
            'original_amount' =>  $package->package_amount,
            'package_amount' =>  $package->package_amount,
        ])) { // fail safe
            $user->delete();
            throw new Exception(\Lang::get('error.registerError'), 1);
            return false;
        }

        // add to network
        $member->setChildOf($direct);

        if (!$this->saveModel($this->walletModel, [
            'member_id' =>  $member->id,
            'register_point'    =>  0,
            'purchase_point'    =>  ($package->purchase_point / 100) * $currentMember->package_amount,
            'promotion_point'   =>  0,
            'cash_point'    =>  0,
        ])) {
            $member->delete();
            $user->delete();
        }

        if (!$this->saveModel($this->detailModel, [
            'member_id' =>  $member->id,
            'mobile_phone' => $data['mobile_phone'],
            'nationality' =>  $data['nationality'],
        ])) {
            $member->delete();
            $user->delete();
        }

        if (!$this->saveModel($this->sharesModel, [
            'member_id' =>  $member->id,
            'amount'    =>  0,
            'share_limit'   =>  $package->share_limit,
            'max_share_sale'    =>  $package->max_share_sale
        ])) {
            $member->delete();
            $user->delete();
        }

        $updatedWallet->save();
        $this->saveWalletStatement($member, $package->package_amount, $data['point_amount'], 'register');

        // add direct and override bonus
        $repo = new BonusRepository();
        $repo->calculateDirect($member, $direct);
        $repo->calculateOverride($member);

        // remove cache for network
        \Cache::forget('member.' . $parent->id . '.children');

        return $member;
    }

    /**
     * Register History - DataTable
     * @param  App\Models\Member $member
     * @return object
     */
    public function registerHistory ($member) {
        return Datatables::eloquent($this->model->where('direct_id', $member->id))
        ->editColumn('package_amount', function ($model) {
            return number_format($model->package_amount, 0);
        })->make(true);
    }

    /**
     * Upgrade / Renew Package
     * @param  App\Models\Member $member
     * @param  array $data
     * @return App\Models\Member
     */
    public function upgrade ($member, $data) {
        $repo = new PackageRepository;

        if (!$package = $repo->findById($data['package_id'])) {
            throw new \Exception(\Lang::get('error.packageNotFound'), 1);
            return false;
        }

        if (!$beforePackage = $repo->findById($member->package_id)) {
            throw new \Exception(\Lang::get('error.packageNotFound'), 1);
            return false;
        }

        if ($member->package_amount > $package->package_amount) { // member has the same or bigger package
            throw new \Exception(\Lang::get('error.packageNotAvailable'), 1);
            return false;
        }

        if ($member->package_amount == $package->package_amount) { // renew
            $this->renewPackage($member, $package, $data);
        } else {
            $this->upgradePackage($member, $package, $beforePackage, $data);
        }

        return $member;
    }

    /**
     * Upgrade Package
     * @param  App\Models\Member $member [The member]
     * @param  App\Models\Package $package [new package]
     * @param  App\Models\Package $beforePackage [old package]
     * @param  array $data [data]
     * @return App\Models\Member
     */
    public function upgradePackage ($member, $package, $beforePackage, $data) {
        $wallet = $member->wallet;
        $needAmount = $package->package_amount - $beforePackage->package_amount;
        if ($wallet->register_point < $needAmount) {
            throw new \Exception(\Lang::get('error.registerNotEnough'), 1);
            return false;
        }
        $wallet->register_point -= $needAmount;
        if ($wallet->register_point < 0) $wallet->register_point = 0; // unlikely

        $shares = $member->shares;
        $member->direct_percent = $package->direct_percent;
        $member->group_level = $package->group_level;
        $member->package_amount = $package->package_amount;
        $member->original_amount = $package->package_amount;
        $member->package_id = $package->id;
        $shares->max_share_sale += $package->max_share_sale;
        $shares->share_limit = $package->share_limit;

        $purchasePoint = $package->purchase_point - $beforePackage->purchase_point;
        $wallet->purchase_point += abs($purchasePoint);

        $member->save();
        $shares->save();
        $wallet->save();

        $this->saveWalletStatement($member, $needAmount, 0, 'upgrade');

        if ($member->position != 'top') {
            $repo = new BonusRepository();
            $repo->calculateDirectUpgrade($member, $needAmount);
            $repo->calculateOverrideUpgrade($member, $needAmount);
            $this->addNetworkSales($member, $needAmount);
        }
        return $member;
    }

    /**
     * Renew Package
     * @param  App\Models\Member $member [The member]
     * @param  App\Models\Package $package [renew package]
     * @param  array $data   [data]
     * @return App\Models\Member
     */
    public function renewPackage ($member, $package, $data) {
        $wallet = $member->wallet;
        $needAmount = $package->package_amount;
        if ($wallet->register_point < $needAmount) {
            throw new \Exception(\Lang::get('error.registerNotEnough'), 1);
            return false;
        }
        $wallet->register_point -= $needAmount;
        if ($wallet->register_point < 0) $wallet->register_point = 0; // unlikely

        $shares = $member->shares;
        $member->direct_percent = $package->direct_percent;
        $member->group_level = $package->group_level;
        $member->package_amount = $package->package_amount;
        $member->package_id = $package->id;
        $shares->max_share_sale += $package->max_share_sale;
        $shares->share_limit = $package->share_limit;
        $wallet->purchase_point += abs($package->purchase_point);

        $member->save();
        $shares->save();
        $wallet->save();

        $this->saveWalletStatement($member, $needAmount, 0, 'renew');

        if ($member->position != 'top') {
            $repo = new BonusRepository();
            $direct = $member->parent();
            $repo->calculateDirect($member, $direct);
            $repo->calculateOverride($member);
            $this->addNetworkSales($member);
        }
        return $member;
    }

    /**
     * Check if member can register
     * @param  $wallet
     * @param  $package
     * @param  $percent PROMOTION POINT percent
     * @return boolean
     */
    public function checkRegisterFunds ($wallet, $package, $percent) {
        $amount = $package->package_amount;
        // check promotion point
        $promotion = ($percent / 100) * $amount;
        if ($wallet->promotion_point < $promotion) return false;
        // check register point
        $register = ((100 - $percent) / 100) * $amount;
        if ($wallet->register_point < $register) return false;
        $wallet->promotion_point -= $promotion;
        $wallet->register_point -= $register;
        return $wallet;
    }

    /**
     * Save Wallet Statement
     * @param  App\Models\Member $member  
     * @param  decimal $amount 
     * @param  integer $percent 
     * @param  boolean $type [<description>]
     * @return boolean
     */
    public function saveWalletStatement ($member, $amount, $percent, $type) {
        $promotion = ($percent / 100) * $amount;
        $register = ((100 - $percent) / 100) * $amount;

        \DB::table('Member_Wallet_Statement')->insert([
            'member_id' => $member->id,
            'username' => $member->username,
            'promotion_amount' => $promotion,
            'register_amount' => $register,
            'type' => $type,
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now()
        ]);

        return true;
    }

    /**
     * Check if member can be add to the network
     * @param  App\Models\Member $parent
     * @return boolean
     */
    public function checkIfPositionAvailable ($parent) {
        if ($this->model
                ->where('parent_id', $parent->id)
                ->first()) { // already filled
            return false;
        }
        return true;
    }

    /**
     * Update member shares when split
     * @param  integer $mult [multiplier]
     * @return boolean
     */
    public function updateSharesSplit ($mult) {
        $this->model->chunk(100, function ($members) use ($mult) {
            foreach ($members as $member) {
                $shares = $member->shares;
                $add = $shares->amount * $mult;
                $amount = $add - $shares->amount;
                $shares->amount += $amount;

                if ($amount > 0) {
                    \DB::table('Shares_Split_Statement')->insert([
                        'amount' => $amount,
                        'username' => $member->username,
                        'member_id' => $member->id,
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now()
                    ]);

                    $shares->save();
                }
            }
        });

        return true;
    }

}