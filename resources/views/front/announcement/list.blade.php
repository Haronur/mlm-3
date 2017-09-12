@extends('front.app')

@section('title')
  @lang('announcement.title') | {{ config('app.name') }}
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
            <h2>@lang('announcement.title')</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" id="announcementListTable" data-url="{{ route('announcement.getList', ['lang' => \App::getLocale()]) }}">
                  <thead>
                    <tr>
                      <th data-id="created_at">@lang('announcement.listDate')</th>
                      <th data-id="title_{{ $lang }}">@lang('announcement.listTitle')</th>
                      <th data-id="action">@lang('announcement.listAction')</th>
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
