@extends('front.app')

@section('title')
@lang('registerHistory.title') | {{ config('app.name') }}
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
            <h2>@lang('registerHistory.title')</h2>
            <p>@lang('registerHistory.subTitle')</p>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
               <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('member.registerHistoryList') }}">
                  <thead>
                    <tr>
                      <th data-id="created_at">@lang('registerHistory.join')</th>
                      <th data-id="username">@lang('registerHistory.username')</th>
                      <th data-id="package_amount">@lang('registerHistory.package')</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@stop
