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
          <div class="row">
            <div id="page-title">
              <h2>@lang('sharesMarket.title')</h2>
              <p>@lang('sharesMarket.subTitle')</p>
            </div>

            <div class="panel">
              <div class="panel-body">
                <div class="tab-pane fade active in" id="tabSell">
                  <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('shares.sellList.public', ['lang' => \App::getLocale()]) }}">
                    <thead>
                      <tr>
                        <th data-id="created_at" data-priority="1">@lang('sharesStatement.sellTitle')</th>
                        <th data-id="username" data-priority="1">@lang('sharesStatement.username')</th>
                        <th data-id="amount">@lang('sharesStatement.amount')</th>
                        <th data-id="amount_left">@lang('sharesStatement.amountLeft')</th>
                        <th data-id="share_price">@lang('sharesStatement.price')</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
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
