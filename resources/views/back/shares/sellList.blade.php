@extends('back.app')

@section('title')
  Sell List | {{ config('app.name') }} 
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
            <h2>Locked Shares Statement</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" id="sharesSellListTable" role="grid" data-url="{{ route('admin.shares.sellList') }}">
                  <thead>
                    <tr>
                      <th data-id="created_at">Created Date</th>
                      <th data-id="member.username" data-name="member.username">Username</th>
                      <th data-id="amount">Amount</th>
                      <th data-id="amount_left">Left</th>
                      <th data-id="share_price">Shares Price</th>
                      <th data-id="total">Total</th>
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
