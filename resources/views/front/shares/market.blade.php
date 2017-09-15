<?php
use App\Repositories\SharesRepository;
use Carbon\Carbon;
$repo = new SharesRepository;
$state = $repo->getCurrentShareState();
$lastUpdate = Carbon::createFromFormat('Y-m-d H:i:s', $state->updated_at);
  // $today = $repo->getTodaySales(true);
$buyPrices = $repo->getAvailableBuyPrice();
?>

@extends('front.app')

@section('title')
@lang('sharesMarket.title') | {{ config('app.name') }}
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
            <h2><span class="glyph-icon icon-bar-chart"></span> @lang('sharesMarket.title')</h2>
          </div>
          
          <div class="row mrg20B">
            <div class="col-md-4">
              <a href="#" title="Share Price" class="tile-box tile-box-alt btn-black">
                <div class="tile-header">
                  0.200 <small>/ {{ trans_choice('common.share', 1) }}</small>
                </div>
                <div class="tile-content-wrapper text-uppercase">
                  <i class="glyph-icon icon-dollar opacity-80 font-size-20"></i> @lang('common.currentShareTitle')
                </div>
              </a>
            </div>

            <?php $next = $state->raise_limit - $state->current_accumulate; ?>
            <div class="col-md-4">
              <a href="#" title="Share Price" class="tile-box tile-box-alt btn-info">
                <div class="tile-header">
                  {{ substr($next, -3) }}
                </div>
                <div class="tile-content-wrapper text-uppercase">
                  <i class="glyph-icon icon-line-chart opacity-80 font-size-20"></i> @lang('sharesMarket.next')
                </div>
              </a>
            </div>

            <div class="col-md-4">
              <a href="#" title="Wallet" class="tile-box tile-box-alt btn-success">
                <div class="tile-header">
                  {{ number_format($member->shares->amount, 0) }}
                </div>
                <div class="tile-content-wrapper text-uppercase">
                  <i class="glyph-icon icon-unlock opacity-80 font-size-20"></i> @lang('common.active')
                </div>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="content-box">
                <h2 class="content-box-header bg-primary">@lang('sharesMarket.buy')</h2>
                <div class="content-box-wrapper">
                  @if (count($buyPrices) > 0)
                  <form role="form" onsubmit="return false;" data-parsley-validate class="action-form shares-form" id="sharesBuyForm" http-type="post" data-url="{{ route('shares.postBuy') }}">
                    <fieldset>
                      <div class="form-group">
                        <label class="control-label">@lang('sharesMarket.price')</label>
                        <select class="form-control" name="price" required="">
                          @if (count($buyPrices) > 0)
                          @foreach ($buyPrices as $price)
                          <?php $price['price'] = number_format($price['price'], 3); ?>
                          <option value="{{ $price['price'] }}">{{ $price['price'] }}</option>
                          @endforeach
                          @endif
                        </select>
                      </div>

                      <div class="form-group">
                        <label class="control-label">@lang('sharesMarket.quantity')</label>
                        <input type="number" min="10" class="form-control" required="" name="quantity" value="10" max="1000">
                        <span class="help-block">@lang('sharesMarket.quantityNotice')</span>
                      </div>

                      <div class="form-group">
                        <label class="control-label">@lang('sharesMarket.total')</label>
                        <h3 class="theme-text no-m-t">$&nbsp;<span class="total-text">0</span></h3>
                      </div>

                      <div class="form-group">
                        <label class="control-label">@lang('sharesMarket.security')</label>
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
                  @else
                  <div class="alert alert-warning">
                    @lang('sharesMarket.noBuy')
                  </div>
                  @endif
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="content-box">
                <h2 class="content-box-header bg-purple">@lang('sharesMarket.sell')</h2>
                <div class="content-box-wrapper">
                  <form role="form" onsubmit="return false;" data-parsley-validate class="action-form shares-form" id="sharesSellForm" http-type="post" data-url="{{ route('shares.postSell') }}">
                    <fieldset>
                      <div class="form-group">
                        <label class="control-label">@lang('sharesMarket.price')</label>
                        <select class="form-control" name="price" required="">
                          <?php
                          $current = number_format($state->current_price, 3);
                          $min = $current - 0.003;
                          if ($min < $state->minimum_price) $min = number_format($state->minimum_price, 3);
                          $max = $current + 0.003;
                          ?>
                          @for ($i=$min; $i<=$max; $i+=0.001)
                          <option value="{{ $i }}">{{ $i }}</option>
                          @endfor
                        </select>
                      </div>

                      <div class="form-group">
                        <label class="control-label">@lang('sharesMarket.quantity')</label>
                        <input type="number" min="10" max="{{ (float) $member->package_amount }}" class="form-control" required="" name="quantity" value="10">
                        <span class="help-block">@lang('sharesMarket.quantityNotice')</span>
                      </div>

                      <div class="form-group">
                        <label class="control-label">@lang('sharesMarket.total')</label>
                        <h3 class="theme-text no-m-t">$&nbsp;<span class="total-text">0</span></h3>
                      </div>

                      <div class="form-group">
                        <label class="control-label">@lang('sharesMarket.netTotal')</label>
                        <h3 class="theme-text no-m-t">$&nbsp;<span class="net-total-text">0</span></h3>
                      </div>

                      <div class="form-group">
                        <label class="control-label">@lang('sharesMarket.security')</label>
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
</div>
@stop
