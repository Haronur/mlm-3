@extends('back.app')

@section('title')
  Follow List | {{ config('app.name') }} 
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('back.include.header')
    @include('back.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          <div class="page-title">
            <h2>Follow Shares Statement</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" id="sharesFollowListTable" role="grid" data-url="{{ route('admin.shares.followList') }}">
                  <thead>
                    <tr>
                      <th data-id="created_at">Created Date</th>
                      <th data-id="activated_at">Active At</th>
                      <th data-id="amount">Shares Amount</th>
                      <th data-id="is_queued">Has Process?</th>
                      <th data-id="action" data-orderable="false" data-searchable="false">
                        Action
                      </th>
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
@stop
