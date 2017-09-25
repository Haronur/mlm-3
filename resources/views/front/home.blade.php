<?php
  use App\Repositories\SharesRepository;
  $sharesRepo = new SharesRepository;
?>

@extends('front.app')

@section('title')
@lang('home.title') | {{ config('app.name') }}
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
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-3">
                  <p class="font-gray">@lang('home.clickTile')</p>
                  <a href="#" class="tile-box tile-box-alt" data-placement="bottom" data-toggle="popover" title="{{ \Lang::get('common.cash') }}" data-content="{{ \Lang::get('common.cashDetail') }}">
                    <div class="tile-header">
                      {{ number_format($member->wallet->cash_point, 2) }}
                    </div>
                    <div class="tile-content-wrapper text-uppercase">
                      <i class="glyph-icon icon-life-buoy opacity-80 font-size-20"></i> @lang('common.cash')
                    </div>
                  </a>
                </div>

                <div class="col-md-3">
                  <p class="font-gray">@lang('home.clickTile')</p>
                  <a href="#" class="tile-box tile-box-alt" data-placement="bottom" data-toggle="popover" title="{{ \Lang::get('common.register') }}" data-content="{{ \Lang::get('common.registerDetail') }}">
                    <div class="tile-header">
                      {{ number_format($member->wallet->register_point, 0) }}
                    </div>
                    <div class="tile-content-wrapper text-uppercase">
                      <i class="glyph-icon icon-life-buoy opacity-80 font-size-20"></i> @lang('common.register')
                    </div>
                  </a>
                </div>

                <div class="col-md-3">
                  <p class="font-gray">@lang('home.clickTile')</p>
                  <a href="#" class="tile-box tile-box-alt" data-placement="bottom" data-toggle="popover" title="{{ \Lang::get('common.promotion') }}" data-content="{{ \Lang::get('common.promotionDetail') }}">
                    <div class="tile-header">
                      {{ number_format($member->wallet->promotion_point, 2) }}
                    </div>
                    <div class="tile-content-wrapper text-uppercase">
                      <i class="glyph-icon icon-life-buoy opacity-80 font-size-20"></i> @lang('common.promotion')
                    </div>
                  </a>
                </div>

                <div class="col-md-3">
                  <p class="font-gray">@lang('home.clickTile')</p>
                  <a href="#" class="tile-box tile-box-alt" data-placement="bottom" data-toggle="popover" title="{{ \Lang::get('common.purchase') }}" data-content="{{ \Lang::get('common.purchaseDetail') }}">
                    <div class="tile-header">
                      {{ number_format($member->wallet->purchase_point, 2) }}
                    </div>
                    <div class="tile-content-wrapper text-uppercase">
                      <i class="glyph-icon icon-life-buoy opacity-80 font-size-20"></i> @lang('common.purchase')
                    </div>
                  </a>
                </div>
              </div>

              <div class="row mrg20T">
                <div class="col-md-6">
                  <a href="#" title="Wallet" class="tile-box tile-box-alt btn-success">
                    <div class="tile-header">
                      {{ number_format($member->shares->amount, 0) }}
                    </div>
                    <div class="tile-content-wrapper text-uppercase">
                      <i class="glyph-icon icon-unlock opacity-80 font-size-20"></i> @lang('common.active')
                    </div>
                  </a>
                </div>

                <?php
                  $freeze = $member->freezeShares()->where('has_process', 0)->get();
                  $freezeTotal = 0;
                  if (count($freeze) > 0) {
                    foreach ($freeze as $shares) {
                      $freezeTotal += $shares->amount;
                    }
                  }
                ?>

                <div class="col-md-6">
                  <a href="#" title="Wallet" class="tile-box tile-box-alt btn-danger">
                    <div class="tile-header">
                      {{ number_format($freezeTotal, 0) }}
                    </div>
                    <div class="tile-content-wrapper text-uppercase">
                      <i class="glyph-icon icon-lock opacity-80 font-size-20"></i> @lang('common.lock')
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row">
                <div class="col-md-6">
                  <a class="tile-box tile-box-shortcut btn-warning">
                    <span class="bs-badge badge-absolute">{{ $member->where('direct_id', $member->id)->count() }}</span>
                    <div class="tile-header">@lang('home.direct')</div>

                    <div class="tile-content-wrapper">
                      <i class="glyph-icon icon-users"></i>
                    </div>
                  </a>
                </div>

                <?php
                  $total = 0;
                  $children = $member->findDescendants()->where('id', '!=', $member->id)->get();
                  if (count($children) > 0) {
                    foreach ($children as $child) {
                      $total += $child->package_amount;
                    }
                  }
                ?>

                <div class="col-md-6">
                  <a class="tile-box tile-box-shortcut btn-success">
                    <span class="bs-badge badge-absolute">{{ number_format($total, 0) }}</span>
                    <div class="tile-header">@lang('home.total')</div>

                    <div class="tile-content-wrapper">
                      <i class="glyph-icon icon-dollar"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="row mrg20T">
            <div class="col-md-8">
              <div class="panel">
                <div class="panel-body">
                  <div class="example-box-wrapper">
                    <?php $countries = config('misc.countries'); ksort($countries); ?>
                    <table class="table table-full table-full-small table-dashboard-widget-1">
                      <thead>
                        <tr>
                          <th>@lang('home.rateCountry')</th>
                          <th>@lang('home.rateCurrency')</th>
                          <th>@lang('home.rateBuy')</th>
                          <th>@lang('home.rateSell')</th>
                        </tr>
                      </thead>
                      <tbody>
                        @foreach ($countries as $index => $country)
                        <tr>
                          <td><img src="{{ asset('assets/img/flags/' . $index . '.png') }}" alt="{{ \Lang::get('country.' . $index) }}" width="25" class="m-r-5" /> @lang('country.' . $index)</td>
                          <td>{{ $country['currency'] }}</td>
                          <td>{{ number_format($country['buy'], 2) }}</td>
                          <td>{{ number_format($country['sell'], 2) }}</td>
                        </tr>
                        @endforeach
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <?php $currentShares = $sharesRepo->getCurrentShareState(); ?>
            <div class="col-md-2">
              <a href="#" title="Share Price" class="tile-box tile-box-alt btn-black">
                <div class="tile-header">
                  {{ number_format($currentShares->current_price, 3) }} <small>/ {{ trans_choice('common.share', 1) }}</small>
                </div>
                <div class="tile-content-wrapper text-uppercase">
                  <i class="glyph-icon icon-dollar opacity-80 font-size-20"></i> @lang('common.currentShareTitle')
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@stop
