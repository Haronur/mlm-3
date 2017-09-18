<?php
use App\Models\Package;
$packages = Package::all();
?>

@extends('front.app')

@section('title')
@lang('register.title') | {{ config('app.name') }}
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('front.include.header')
    @include('front.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          <div id="page-title">
            <h2>@lang('register.title')</h2>
            <p>@lang('register.notice')</p>
          </div>

          <div class="row">
            <div class="col-md-4">
              <a href="#" title="Wallet" class="tile-box tile-box-alt">
                <div class="tile-header">
                  {{ number_format($member->wallet->register_point, 0) }}
                </div>
                <div class="tile-content-wrapper text-uppercase">
                  <i class="glyph-icon icon-money opacity-80 font-size-20"></i> @lang('common.register')
                </div>
              </a>
            </div>

            <div class="col-md-4">
              <a href="#" title="Wallet" class="tile-box tile-box-alt">
                <div class="tile-header">
                  {{ number_format($member->wallet->promotion_point, 0) }}
                </div>
                <div class="tile-content-wrapper text-uppercase">
                  <i class="glyph-icon icon-money opacity-80 font-size-20"></i> @lang('common.promotion')
                </div>
              </a>
            </div>
          </div>

          <hr>

          <div class="row">
            <div class="col-md-8">
              <form class="action-form" data-parsley-validate="" role="form" id="registerForm" http-type="post" data-url="{{ route('member.postRegister') }}" data-nationality="true">
                <fieldset>
                  <div class="form-group">
                    <label class="control-label" for="inputPackage">@lang('register.package')</label>
                    <div class="input-group">
                      <select class="form-control" name="package_id" id="inputPackage" required="">
                        @if (count($packages) > 0)
                        @foreach ($packages as $package)
                        <option value="{{ $package->id }}" data-value="{{ $package->package_amount }}">
                          {{ number_format($package->package_amount, 0) }}
                        </option>
                        @endforeach
                        @endif
                      </select>
                      <span class="input-group-addon">USD</span>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label">@lang('register.username')</label>
                    <input type="text" name="username" class="form-control" required="">
                  </div>

                  <div class="form-group">
                    <label class="control-label">@lang('register.name')</label>
                    <input type="text" name="name" class="form-control" required="">
                  </div>

                  <div class="form-group">
                    <label class="control-label">@lang('register.email')</label>
                    <input type="email" name="email" class="form-control" required="">
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="inputMobile">@lang('register.mobile')</label>
                    <input type="text" class="form-control" required="" name="mobile_phone" id="inputMobile">
                  </div>

                  <?php $countries = config('misc.countries'); ksort($countries); ?>
                  <div class="form-group">
                    <label class="control-label" for="inputNationality">@lang('register.nationality')</label>
                    <select class="form-control dd-icon" name="nationality" id="inputNationality">
                      @foreach ($countries as $country => $value)
                      <option value="{{ $country }}" data-imagesrc="{{ asset('assets/img/flags/' . $country . '.png') }}" data-description="{{ \Lang::get('country.selected') }}">@lang('country.' . $country)</option>
                      @endforeach
                    </select>
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="inputPassword">@lang('register.password')</label>
                    <input type="password" id="inputPassword" name="password" class="form-control" required="" minlength="5">
                  </div>

                  <div class="form-group">
                    <label class="control-label">@lang('register.repassword')</label>
                    <input type="password" data-parsley-equalto="#inputPassword" class="form-control" required="" minlength="5">
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="inputSPassword">@lang('register.spassword')</label>
                    <input type="password" id="inputSPassword" name="secret" class="form-control" required="" minlength="5">
                  </div>

                  <div class="form-group">
                    <label class="control-label">@lang('register.respassword')</label>
                    <input type="password" data-parsley-equalto="#inputSPassword" class="form-control" required="" minlength="5">
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="inputPoint">@lang('register.registerPoint')</label>
                    <div class="input-group">
                      <select class="form-control" name="point_amount" id="inputPoint">
                        @for ($i=0; $i<=30; $i+=10)
                        <option value="{{ $i }}">{{ $i }}</option>
                        @endfor
                      </select>
                      <span class="input-group-addon">%</span>
                    </div>
                    <span class="help-block">
                      <p style="margin-bottom:5px;">@lang('register.registerNeed') <span class="text-warning" id="registerPointValue"></span></p>
                      <p>@lang('register.promoNeed') <span class="text-warning" id="promotionPointValue"></span></p>
                    </span>
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="inputS">@lang('register.security')</label>
                    <input type="password" class="form-control" required="" name="s" id="inputS">
                  </div>

                  <div class="row">
                    <div class="checkbox checkbox-info col-md-6">
                      <label>
                        <input type="checkbox" id="termsCheck" class="custom-checkbox" required="" name="terms"> @lang('register.agree')
                      </label>
                    </div>
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

@stop
