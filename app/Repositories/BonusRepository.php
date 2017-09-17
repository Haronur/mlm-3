<?php

namespace App\Repositories;

use Carbon\Carbon;
use App\Models\Member;
use App\Models\BonusDirect;
use App\Models\BonusOverride;
use App\Models\BonusGroup;
use Yajra\Datatables\Facades\Datatables;

class BonusRepository extends BaseRepository
{
    protected $directModel, $overrideModel, $groupModel;
    protected $allowedFields = [];
    protected $booleanFields = [];
    private $calculation;

    public function __construct() {
        $this->directModel = new BonusDirect;
        $this->overrideModel = new BonusOverride;
        $this->groupModel = new BonusGroup;
        $this->groupModifier = config('misc.bonus.group');
        $this->calculation = config('misc.bonus.calculation');
    }

    public function saveModel($model, $data) {
        foreach ($data as $k=>$d) {
            $model->{$k} = $d;
        }
        $model->save();
        return $model;
    }

    /**
     * @todo: Deprecated, remove
     */
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

    public function findById ($id, $type) {
        switch ($type) {
            case 'direct':
                $model = $this->directModel;
                break;
            case 'override':
                $model = $this->overrideModel;
                break;
            case 'pairing':
                $model = $this->pairingModel;
                break;
            case 'group':
                $model = $this->groupModel;
                break;
            default:
                $model = false;
                break;
        }

        if (!$model) return false;
        return $model->where('id', $id)->first();
    }

    /**
     * All Withdraws - DataTable - admin
     * @param  boolean $table
     * @return object
     */
    public function findAll ($table=false, $type) {
        switch ($type) {
            case 'direct':
                $model = $this->directModel;
                break;
            case 'override':
                $model = $this->overrideModel;
                break;
            case 'pairing':
                $model = $this->pairingModel;
                break;
            case 'group':
                $model = $this->groupModel;
                break;
            default:
                $model = false;
                break;
        }

        if (!$model) return false;
        if (!$table) return $model->all();
        else {
            return Datatables::eloquent($model->query())
                ->editColumn('total', function ($model) {
                    return number_format($model->total, 2);
                })
                ->addColumn('action', function ($model) use ($type) {
                    return view('back.bonus.action')->with('data', [
                        'model' => $model,
                        'type' => $type
                    ]);
                })
                ->rawColumns(['action', 'status'])
                ->make(true);
        }
    }

    /**
     * Direct bonus - DataTable
     * @param  App\Models\Member $member [description]
     * @return [type]         [description]
     */
    public function directList ($member) {
        return Datatables::eloquent($this->directModel->where('member_id', $member->id))
            ->editColumn('amount_cash', function ($model) {
                return number_format($model->amount_cash, 2);
            })
            ->editColumn('amount_promotion', function ($model) {
                return number_format($model->amount_promotion, 2);
            })
            ->editColumn('total', function ($model) {
                return number_format($model->total, 2);
            })
            ->make(true);
    }

    /**
     * Override bonus - DataTable
     * @param  App\Models\Member $member [description]
     * @return [type]         [description]
     */
    public function overrideList ($member) {
        return Datatables::eloquent($this->overrideModel->where('member_id', $member->id))
            ->editColumn('amount_cash', function ($model) {
                return number_format($model->amount_cash, 2);
            })
            ->editColumn('amount_promotion', function ($model) {
                return number_format($model->amount_promotion, 2);
            })
            ->editColumn('total', function ($model) {
                return number_format($model->total, 2);
            })
            ->make(true);
    }

    /**
     * Group bonus - DataTable
     * @param  App\Models\Member $member [description]
     * @return [type]         [description]
     */
    public function groupList ($member) {
        return Datatables::eloquent($this->groupModel->where('member_id', $member->id))
            ->editColumn('amount_cash', function ($model) {
                return number_format($model->amount_cash, 2);
            })
            ->editColumn('amount_promotion', function ($model) {
                return number_format($model->amount_promotion, 2);
            })
            ->editColumn('total', function ($model) {
                return number_format($model->total, 2);
            })
            ->make(true);
    }

    /**
     * Direct sponsor calculation
     * 
     * @param App\Models\Member $member
     * @param App\Models\Member $parent
     * @return boolean
     */
    public function calculateDirect ($member, $parent) {
        if (!$wallet = $parent->wallet) {
            throw new \Exception(\Lang::get('error.walletNotFound'), 1);
            return false;
        }

        // add to wallet
        $amount = ($parent->direct_percent / 100) * $member->package_amount;
        $cash = ($this->calculation['cash'] / 100) * $amount;
        $promotion = ($this->calculation['promotion'] / 100) * $amount;
        $wallet->cash_point += $cash;
        $wallet->promotion_point += $promotion;
        $wallet->save();

        // save record
        $model = new $this->directModel;
        $this->saveModel($model, [
            'amount_cash' => $cash,
            'amount_promotion' => $promotion,
            'total' =>  $cash + $promotion,
            'username' => $parent->username,
            'from_username' => $member->username,
            'member_id' => $parent->id
        ]);

        return true;
    }

    /**
     * Direct sponsor calculation - when upgrade
     * 
     * @param App\Models\Member $member
     * @param App\Models\Member $parent
     * @return boolean
     */
    public function calculateDirectUpgrade ($member, $amountToAdd) {
        if (!$parent = $member->direct()) {
            return false;
        }

        if (!$wallet = $parent->wallet) {
            throw new \Exception(\Lang::get('error.walletNotFound'), 1);
            return false;
        }

        // add to wallet
        $amount = ($parent->direct_percent / 100) * $amountToAdd;
        $cash = ($this->calculation['cash'] / 100) * $amount;
        $promotion = ($this->calculation['promotion'] / 100) * $amount;
        $wallet->cash_point += $cash;
        $wallet->promotion_point += $promotion;
        $wallet->save();

        // save record
        $model = new $this->directModel;
        $this->saveModel($model, [
            'amount_cash' => $cash,
            'amount_promotion' => $promotion,
            'total' =>  $cash + $promotion,
            'username' => $parent->username,
            'from_username' => $member->username,
            'member_id' => $parent->id
        ]);

        return true;
    }

    /**
     * Override calculation
     * 
     * @param App\Models\Member $member
     * @return boolean
     */
    public function calculateOverride ($member) {
        $calculation = $this->calculation;
        $currentMember = $member->direct();
        $remain = 20;
        if (!$currentMember) return false;
        $model = $this->overrideModel;
        // calculate remain, if any
        while ($remain > 0) {
            if (!$parent = $currentMember->direct()) break; // remain override vanish
            if ($currentMember->direct_percent < $parent->direct_percent) {
                $difference = $parent->direct_percent - $currentMember->direct_percent;
                if ($wallet = $parent->wallet) {
                    // add to wallet
                    $amount = ($difference / 100) * $member->package_amount;
                    $cash = ($calculation['cash'] / 100) * $amount;
                    $promotion = ($calculation['promotion'] / 100) * $amount;
                    $wallet->cash_point += $cash;
                    $wallet->promotion_point += $promotion;
                    $wallet->save();

                    // save record
                    $this->saveModel(new $model, [
                        'amount_cash' => $cash,
                        'amount_promotion' => $promotion,
                        'total' =>  $cash + $promotion,
                        'username' => $parent->username,
                        'from_username' => $member->username,
                        'member_id' => $parent->id
                    ]);
                    $remain -= $difference;
                } 
            }
            $currentMember = $parent;
        }
        return true;
    }

    /**
     * Override calculation - when upgrade
     * 
     * @param App\Models\Member $member
     * @return boolean
     */
    public function calculateOverrideUpgrade ($member, $amountToAdd) {
        $calculation = $this->calculation;
        $currentMember = $member->direct();
        $remain = 20;
        if (!$currentMember) return false;
        $model = $this->overrideModel;
        // calculate remain, if any
        while ($remain > 0) {
            if (!$parent = $currentMember->direct()) break; // remain override vanish
            if ($currentMember->direct_percent < $parent->direct_percent) {
                $difference = $parent->direct_percent - $currentMember->direct_percent;
                if ($wallet = $parent->wallet) {
                    // add to wallet
                    $amount = ($difference / 100) * $amountToAdd;
                    $cash = ($calculation['cash'] / 100) * $amount;
                    $promotion = ($calculation['promotion'] / 100) * $amount;
                    $wallet->cash_point += $cash;
                    $wallet->promotion_point += $promotion;
                    $wallet->save();

                    // save record
                    $this->saveModel(new $model, [
                        'amount_cash' => $cash,
                        'amount_promotion' => $promotion,
                        'total' =>  $cash + $promotion,
                        'username' => $parent->username,
                        'from_username' => $member->username,
                        'member_id' => $parent->id
                    ]);
                    $remain -= $difference;
                } 
            }
            $currentMember = $parent;
        }
        return true;
    }

    /**
     * Group calculation
     *
     * @param App\Models\Member $member
     * @return boolean
     */
    public function calculateGroup ($member) {
        if ($member->group_level < 1) return false;
        if (!$wallet = $member->wallet) return false;

        $calculation = $this->calculation;
        $time = Carbon::today()->subDays(30);

        $members = $member->children()
            ->where('level', '<=', $member->level + $member->group_level)
            ->where('created_at', '>=', $time->format('Y-m-d') . ' 00:00:00')
            ->where('created_at', '<=', $time->format('Y-m-d') . ' 23:59:59')
            ->get();
        $amount = 0;
        $froms = '';

        if (count($members) > 0) {
            foreach ($members as $m) {
                $amount += ($this->groupModifier / 100) * $m->original_amount;
                $froms .= $m->username . ',';
            }
        } else {
            return false;
        }

        $froms = rtrim($froms, ',');

        // add to wallet
        $cash = ($calculation['cash'] / 100) * $amount;
        $promotion = ($calculation['promotion'] / 100) * $amount;
        $wallet->cash_point += $cash;
        $wallet->promotion_point += $promotion;
        $wallet->save();

        // save record
        $model = $this->groupModel;
        $this->saveModel(new $model, [
            'amount_cash' => $cash,
            'amount_promotion' => $promotion,
            'from_usernames' => $froms,
            'total' =>  $cash + $promotion,
            'username' => $member->username,
            'member_id' => $member->id
        ]);

        return true;
    }

    /**
     * Pending Group Calculation
     * @param App\Models\Member $member [description]
     * @return float
     */
    public function pendingGroupList ($member) {
        $time = Carbon::today()->subDays(30);
        $modifier = $this->groupModifier / 100;

        $query = $member->children()->where('level', '<=', $member->level + $member->group_level);
        $data = Datatables::eloquent($query)
            ->editColumn('created_at', function ($model) {
                return $model->created_at->format('Y-m-d H:i A');
            })
            ->editColumn('active_on', function ($model) {
                return $model->created_at->addDays(30)->format('Y-m-d');
            })
            ->editColumn('amount', function ($model) use ($modifier) {
                return number_format($modifier * $model->original_amount, 0);
            })
            ->make(true);

        return $data;
    }
}