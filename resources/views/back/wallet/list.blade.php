@extends('back.app')

@section('title')
  Wallet List | {{ config('app.name') }} 
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('back.include.header')
    @include('back.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          <div id="page-header">
            <h2>Wallet List</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('admin.wallet.getList') }}">
                  <thead>
                    <tr>
                      <th data-id="created_at">Date</th>
                      <th data-id="username" data-name="member.username">Username</th>
                      <th data-id="register_point">Register</th>
                      <th data-id="promotion_point">Promotion</th>
                      <th data-id="purchase_point">Purchase</th>
                      <th data-id="cash_point">Cash</th>
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
