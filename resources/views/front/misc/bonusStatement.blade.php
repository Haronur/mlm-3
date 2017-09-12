@extends('front.app')

@section('title')
@lang('misc.bonusTitle') | {{ config('app.name') }}
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
              <h2>@lang('misc.bonusTitle')</h2>
              <p>@lang('misc.bonusSubtitle')</p>
            </div>

            <div class="panel">
              <div class="panel-body">
                <div class="example-box-wrapper">
                  <ul class="list-group list-group-separator row list-group-icons">
                    <li class="col-md-4 active">
                      <a href="#tabDirect" data-toggle="tab" class="list-group-item">
                        <i class="glyph-icon font-red icon-money"></i>
                        @lang('misc.direct')
                      </a>
                    </li>
                    <li class="col-md-4">
                      <a href="#tabOverride" data-toggle="tab" class="list-group-item">
                        <i class="glyph-icon icon-money"></i>
                        @lang('misc.override')
                      </a>
                    </li>
                    <li class="col-md-4">
                      <a href="#tabGroup" data-toggle="tab" class="list-group-item">
                        <i class="glyph-icon font-primary icon-money"></i>
                        @lang('misc.group')
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane fade active in" id="tabDirect">
                      <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('bonus.directList', ['lang' => \App::getLocale()]) }}">
                        <thead>
                          <tr>
                            <th data-id="created_at">@lang('misc.create')</th>
                            <th data-id="from_username">@lang('common.from')</th>
                            <th data-id="amount_cash">@lang('misc.cash')</th>
                            <th data-id="amount_promotion">@lang('misc.promotion')</th>
                            <th data-id="total">@lang('misc.total')</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>

                    <div class="tab-pane fade in" id="tabOverride">
                      <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('bonus.overrideList', ['lang' => \App::getLocale()]) }}">
                        <thead>
                          <tr>
                            <th data-id="created_at">@lang('misc.create')</th>
                            <th data-id="from_username">@lang('common.from')</th>
                            <th data-id="amount_cash">@lang('misc.cash')</th>
                            <th data-id="amount_promotion">@lang('misc.promotion')</th>
                            <th data-id="total">@lang('misc.total')</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>

                    <div class="tab-pane fade in" id="tabGroup">
                      <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('bonus.groupList', ['lang' => \App::getLocale()]) }}">
                        <thead>
                          <tr>
                            <th data-id="created_at">@lang('misc.create')</th>
                            <th data-id="from_username">@lang('common.from')</th>
                            <th data-id="amount_cash">@lang('misc.cash')</th>
                            <th data-id="amount_promotion">@lang('misc.promotion')</th>
                            <th data-id="total">@lang('misc.total')</th>
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
  </div>
</div>
@stop
