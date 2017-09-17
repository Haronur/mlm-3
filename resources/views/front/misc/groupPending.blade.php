@extends('front.app')

@section('title')
@lang('misc.groupPending') | {{ config('app.name') }}
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
              <h2>@lang('misc.groupPending')</h2>
              <p>@lang('misc.groupPendingSubtitle')</p>
            </div>

            <div class="panel">
              <div class="panel-body">
                <div class="example-box-wrapper">
                  @if ($member->is_group_bonus)
                    <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('bonus.group.pendingList', ['lang' => \App::getLocale()]) }}">
                      <thead>
                        <tr>
                          <th data-id="created_at">@lang('misc.groupPending.join')</th>
                          <th data-id="active_on" data-orderable="false">@lang('misc.groupPending.active')</th>
                          <th data-id="username">@lang('misc.groupPending.username')</th>
                          <th data-id="amount">@lang('misc.groupPending.amount')</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                  @else
                    <div class="alert alert-danger">
                      @lang('misc.groupPending.alert')
                    </div>
                  @endif
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
