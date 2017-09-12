@extends('front.app')

@section('title')
@lang('wdStatement.title') | {{ config('app.name') }}
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
              <h2>@lang('wdStatement.title')</h2>
              <p>@lang('wdStatement.subTitle')</p>
            </div>

            <div class="panel">
              <div class="panel-body">
                <div class="example-box-wrapper">
                  <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('withdraw.list', ['lang' => \App::getLocale()]) }}">
                    <thead>
                      <tr>
                        <th data-id="created_at">@lang('wdStatement.create')</th>
                        <th data-id="amount">@lang('wdStatement.amount')</th>
                        <th data-id="admin">@lang('wdStatement.adminFee')</th>
                        <th data-id="status">@lang('wdStatement.status')</th>
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
