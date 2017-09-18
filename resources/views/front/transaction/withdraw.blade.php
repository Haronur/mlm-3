@extends('front.app')

@section('title')
@lang('withdraw.title') | {{ config('app.name') }}
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('front.include.header')
    @include('front.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          <div class="row">
            <div id="page-title">
              <h1>@lang('withdraw.title')</h1>
              <p>@lang('withdraw.subTitle')</p>
            </div>

            <?php 
            $bankName = $member->detail->bank_name;
            $bankAccHolder = $member->detail->bank_account_holder;
            $bankAccNumber = $member->detail->bank_account_number;
            ?>

            @if (
              is_null($bankName) || 
              is_null($bankAccNumber) ||
              is_null($bankAccHolder)
              )
              <div class="alert alert-danger">
                @lang('withdraw.missingNotice') <a href="{{ route('settings.bank', ['lang' => \App::getLocale()]) }}" class="alert-link" style="text-decoration: underline;">@lang('withdraw.missingLink')</a>
              </div>
            @endif

            <div class="row">
              <div class="col-md-4">
                <h3>{{ number_format($member->wallet->cash_point, 2) }}</h3>
                <p>@lang('common.cash')</p>
                <hr>

                <h3>{{ $bankName }}</h3>
                <p>@lang('withdraw.bank')</p>
                <hr>

                <h3>{{ $bankAccNumber }} / {{ $bankAccHolder }}</h3>
                <p>@lang('withdraw.bank.account')</p>
              </div>

              <div class="col-md-8">
                <div class="panel">
                  <div class="panel-body">
                    <div class="example-box-wrapper">
                      <form id="withdrawForm" role="form" class="action-form" data-url="{{ route('transaction.postWithdraw', ['lang' => \App::getLocale()]) }}" data-parsley-validate="" onsubmit="return false;" http-type="post">
                        <fieldset>
                          <div class="form-group">
                            <label class="control-label">@lang('withdraw.amount')</label>
                            <div class="input-group">
                              <span class="input-group-addon">$</span>
                              <input type="number" min="20" class="form-control" name="amount" required="" min="300">
                            </div>
                            <span class="help-block">@lang('withdraw.amountNotice')</span>
                          </div>

                          <div class="form-group">
                            <label class="control-label">@lang('withdraw.fee')</label>
                            <h3 class="text-warning" id="adminFeeLabel" data-percent="5">0</h3>
                          </div>

                          <div class="form-group">
                            <label class="control-label">@lang('withdraw.total')</label>
                            <h2 class="text-warning" id="totalLabel">0</h2>
                          </div>

                          <div class="form-group">
                            <label class="control-label">@lang('withdraw.security')</label>
                            <input type="password" class="form-control" name="s" required="">
                          </div>

                          <div class="form-group">
                            <button type="submit" class="btn btn-primary">
                              <span class="btn-preloader">
                                <span class="icon-spin icon-spin-1"></span>
                              </span>
                              <span>@lang('common.submit')</span>
                            </button>
                            <button type="reset" class="btn btn-default">@lang('common.cancel')</button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@stop
