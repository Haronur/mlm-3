<?php $type = \Input::get('type'); ?>
@extends('back.app')

@section('title')
  Edit Bonus Statement | {{ config('app.name') }} 
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
            <h2>Add Bonus Statement</h2>
          </div>

          <div class="alert alert-danger">
            Remember to UPDATE member wallet.
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <form role="form" class="action-form" data-url="{{ route('admin.bonus.update', ['id' => $model->id, 'type' => $type]) }}" http-type="post" onsubmit="return false;">
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label">User ID</label>
                      <input type="text" class="form-control" value="{{ $model->username }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Cash Point</label>
                      <input type="number" step="any" name="amount_cash" class="form-control" value="{{ (float) $model->amount_cash }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Promotion Point</label>
                      <input type="number" step="any" name="amount_promotion" class="form-control" value="{{ (float) $model->amount_promotion }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Total</label>
                      <input type="number" step="any" name="total" class="form-control" value="{{ (float) $model->total }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Date Created</label>
                      <input type="text" class="form-control" value="{{ $model->created_at }}" required="" name="created_at">
                      <span class="help-block">YYYY-MM-DD HH:MM:SS format</span>
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-primary">
                        <span class="btn-preloader">
                          <span class="icon-spin icon-spin-1"></span>
                        </span>
                        <span>Submit</span>
                      </button>
                      <button type="reset" class="btn btn-default">Cancel</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@stop
