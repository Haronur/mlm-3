@extends('front.app')

@section('title')
  @lang('sharesLock.title') | {{ config('app.name') }}
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
              <h2><span class="glyph-icon icon-lock"></span> @lang('sharesLock.title')</h2>
              <p>@lang('sharesLock.subTitle')</p>
            </div>

            <div class="panel">
              <div class="panel-body">
                <div class="example-box-wrapper">
                  <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('shares.freezeList') }}">
                    <thead>
                      <tr>
                        <th data-id="created_at">@lang('sharesLock.create')</th>
                        <th data-id="active_date">@lang('sharesLock.active')</th>
                        <th data-id="amount">@lang('sharesLock.amount')</th>
                        <th data-id="has_process">@lang('sharesLock.process')</th>
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
