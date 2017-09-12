@extends('front.app')

@section('title')
  @lang('settings.title2') | {{ config('app.name') }}
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
              <h2>@lang('settings.title1')</h2>
              <p>@lang('settings.subTitle1')</p>
            </div>

            <div class="row">
              <div class="col-md-6">
                <form data-parsley-validate="" role="form" class="form-floating action-form" id="accountBankForm" http-type="post" data-url="{{ route('account.postUpdate') }}">
                  <fieldset>
                    <?php $countries = config('misc.countries'); ?>
                    <div class="form-group">
                      <label class="control-label" for="inputBankName">@lang('settings.bank.name')</label>
                      <select class="form-control" name="bank_name" id="inputBankName">
                        @foreach ($countries as $country => $value)
                        <optgroup label="{{ \Lang::get('country.' . $country) }}">
                          @foreach ($value['banks'] as $bank)
                          <option value="{{ $bank }}" @if ($member->detail->bank_name == $bank) selected="" @endif>{{ $bank }}</option>
                          @endforeach
                        </optgroup>
                        @endforeach
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="control-label" for="inputBankAccNumber">@lang('settings.bank.number')</label>
                      <input type="text" name="bank_account_number" id="inputBankAccNumber" class="form-control" required="" value="{{ $member->detail->bank_account_number }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label" for="inputBankAccHolder">@lang('settings.bank.holder')</label>
                      <input type="text" name="bank_account_holder" id="inputBankAccHolder" class="form-control" required="" value="{{ $member->detail->bank_account_holder }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label" for="inputBankAddress">@lang('settings.bank.address')</label>
                      <textarea class="form-control" id="inputBankAddress" maxlength="1000" name="bank_address">{{ $member->detail->bank_address }}</textarea>
                    </div>

                    <div class="form-group">
                      <label class="control-label" for="inputBankBranch">@lang('settings.bank.branch')</label>
                      <input type="text" name="bank_branch" id="inputBankBranch" class="form-control" value="{{ $member->detail->bank_branch }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label">@lang('settings.secret')</label>
                      <input type="password" name="s" class="form-control" required="">
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
@stop
