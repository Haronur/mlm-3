<?php
use App\Models\Package;
$packages = Package::orderBy('id', 'asc')->get();
?>

@extends('back.app')

@section('title')
  Package Settings | {{ config('app.name') }} 
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
            <h2>Package Settings</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <table id="packageListTable" class="table table-full table-bordered table-full-small" cellspacing="0" width="100%" role="grid">
                  <thead>
                    <tr>
                      <th>Amount</th>
                      <th>Direct %</th>
                      <th>Group Level</th>
                      <th>Shares Limit</th>
                      <th>Max Shares Sales</th>
                      <th>Purchase Point</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    @if (count($packages) > 0)
                    @foreach ($packages as $package)
                    <tr>
                      <td>
                        <div class="input-group">
                          <span class="input-group-addon">$</span>
                          <input type="number" class="form-control" name="package_amount" value="{{ (float) $package->package_amount }}" required="" min="0">
                        </div>
                      </td>

                      <td>
                        <div class="input-group">
                          <input type="number" class="form-control" name="direct_percent" value="{{ (integer) $package->direct_percent }}" required="" min="0">
                          <span class="input-group-addon">%</span>
                        </div>
                      </td>

                      <td>
                        <div class="input-group">
                          <input type="number" name="group_level" class="form-control" value="{{ (integer) $package->group_level }}" required="" min="0">
                          <span class="input-group-addon">level(s)</span>
                        </div>
                      </td>

                      <td>
                        <div class="input-group">
                          <input type="number" class="form-control" name="share_limit" value="{{ (integer) $package->share_limit }}" required="" min="0">
                          <span class="input-group-addon">shares</span>
                        </div>
                      </td>

                      <td>
                        <div class="input-group">
                          <span class="input-group-addon">$</span>
                          <input type="number" class="form-control" name="max_share_sale" value="{{ (float) $package->max_share_sale }}" required="" min="0">
                        </div>
                      </td>

                      <td>
                        <div class="input-group">
                          <span class="input-group-addon">%</span>
                          <input type="number" class="form-control" name="purchase_point" value="{{ (float) $package->purchase_point }}" required="" min="0">
                        </div>
                      </td>

                      <td>
                        <button class="btn btn-warning btn-flat-border btn-update" data-url="{{ route('admin.package.update', ['id' => $package->id]) }}" type="submit">
                          <i class="glyph-icon icon-pencil"></i>
                          <span>Update</span>
                        </button>
                      </td>
                    </tr>
                    @endforeach
                    @endif
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
