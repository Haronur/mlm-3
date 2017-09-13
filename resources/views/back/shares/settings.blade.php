<?php
$shares = \DB::table('Shares_Centre')->first();
?>

@extends('back.app')

@section('title')
  Shares Settings | {{ config('app.name') }} 
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
            <h2>Shares Settings</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <table id="sharesListTable" class="table table-bordered table-full table-full-small" cellspacing="0" width="100%" role="grid">
              <thead>
                <tr>
                  <th>Min Price</th>
                  <th>Curr Price</th>
                  <th>Curr Sales Total</th>
                  <th>Raise Every</th>
                  <th>Raise By</th>
                  <th>Always Company?</th>
                  <th>Always Follow?</th>
                  <th>Follow Percent</th>
                  <th>Follower Amount</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <td>
                  <div class="input-group">
                    <span class="input-group-addon">$</span>
                    <input type="number" name="minimum_price" class="form-control" value="{{ (float) $shares->minimum_price }}" required="" min="0">
                  </div>
                </td>

                <td>
                  <div class="input-group">
                    <span class="input-group-addon">$</span>
                    <input type="number" name="current_price" class="form-control" value="{{ (float) $shares->current_price }}" required="" min="0">
                  </div>
                </td>

                <td>
                  <div class="input-group">
                    <input type="number" class="form-control" value="{{ (integer) $shares->current_accumulate }}" disabled="" readonly="">
                    <span class="input-group-addon">shares</span>
                  </div>
                </td>

                <td>
                  <div class="input-group">
                    <input type="number" name="raise_limit" class="form-control" value="{{ (integer) $shares->raise_limit }}" required="" min="0">
                    <span class="input-group-addon">shares</span>
                  </div>
                </td>

                <td>
                  <div class="input-group">
                    <span class="input-group-addon">$</span>
                    <input type="number" name="raise_by" class="form-control" value="{{ (float) $shares->raise_by }}" required="" min="0">
                  </div>
                </td>

                <td>
                  <input type="checkbox" class="input-switch" name="always_company" @if ($shares->always_company) checked="checked" @endif data-on-text="Yes" data-off-text="No" data-size="small" data-on-color="danger">
                </td>

                <td>
                  <input type="checkbox" class="input-switch" name="always_follow" @if ($shares->always_follow) checked="checked" @endif data-on-text="Yes" data-off-text="No" data-size="small" data-on-color="danger">
                </td>

                <td>
                  <input type="number" name="follow_percent" class="form-control" value="{{ (float) $shares->follow_percent }}" required="" min="0" max="100">
                </td>

                <td>
                  <input type="number" name="follow_amount" class="form-control" value="{{ (float) $shares->follow_amount }}" required="" min="0" max="3">
                </td>

                <td>
                  <button class="btn btn-warning btn-hover btn-update" data-url="{{ route('admin.shares.update', ['id' => $shares->id]) }}" type="submit">
                    <i class="glyph-icon icon-pencil"></i>
                    <span>Update</span>
                  </button>
                </td>
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
