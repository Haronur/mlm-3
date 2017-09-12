<?php $member = \DB::table('Member')->where('id', trim($id))->first(); ?>
@extends('back.app')

@section('title')
  Wallet Statement List | {{ config('app.name') }} 
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('back.include.header')
    @include('back.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          @if ($member)

          <div id="page-header">
            <h2>{{ $member->username }} Statement List</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('admin.wallet.statement.getList', ['id' => $id]) }}">
                  <thead>
                    <tr>
                      <th data-id="created_at">Date</th>
                      <th data-id="username">Username</th>
                      <th data-id="register_amount">Register</th>
                      <th data-id="promotion_amount">Promotion</th>
                      <th data-id="type">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          @else

          <div class="alert alert-danger">
            Member not found.
          </div>

          @endif
        </div>
      </div>
    </div>
  </div>
</div>
@stop
