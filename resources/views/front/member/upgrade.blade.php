<?php
use App\Models\Package;
$packages = Package::all();
?>

@extends('front.app')

@section('title')
@lang('upgrade.title') | {{ config('app.name') }}
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
            <h2>@lang('upgrade.title')</h2>
          </div>

          <div class="row">
            <div class="col-md-4">
              <a href="#" title="Wallet" class="tile-box tile-box-alt">
                <div class="tile-header">
                  8,999.99
                </div>
                <div class="tile-content-wrapper text-uppercase">
                  <i class="glyph-icon icon-money opacity-80 font-size-20"></i> @lang('common.register')
                </div>
              </a>
            </div>
          </div>

          <hr>

          <div class="row">
            <div class="col-md-8">
              <form class="action-form" data-parsley-validate="" role="form" http-type="post" data-url="{{ route('member.postUpgrade') }}">
                <fieldset>
                  <div class="form-group">
                    <label class="control-label" for="inputPackage">@lang('upgrade.package')</label>
                    <div class="input-group">
                      <select class="form-control" name="package_id" id="inputPackage" required="">
                        @if (count($packages) > 0)
                        @foreach ($packages as $package)
                        @if ($member->package_amount <= $package->package_amount)
                        <option value="{{ $package->id }}">{{ number_format($package->package_amount, 0) }} @if ($member->package_amount == $package->package_amount) (@lang('upgrade.renew')) @endif</option>
                        @endif
                        @endforeach
                        @endif
                      </select>
                      <span class="input-group-addon">USD</span>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="inputS">@lang('register.security')</label>
                    <input type="password" class="form-control" required="" name="s" id="inputS">
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
