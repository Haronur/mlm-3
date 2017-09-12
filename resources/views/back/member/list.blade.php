@extends('back.app')

@section('title')
  Member List | {{ config('app.name') }}
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('back.include.header')
    @include('back.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          <div id="page-title">
            <h2>Member List</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('admin.member.getList') }}">
                <thead>
                  <tr>
                    <th data-id="created_at">Join Date</th>
                    <th data-id="username">Username</th>
                    <th data-id="package_amount">Package</th>
                    <th data-id="direct" data-orderable="false" data-searchable="false">Direct ID</th>
                    <th data-id="register_by">Registered By</th>
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
@stop
