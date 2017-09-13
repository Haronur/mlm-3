@extends('back.app')

@section('title')
  Edit WD Statement | {{ config('app.name') }} 
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
            <h2>Edit WD Statement</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <form role="form" class="action-form" data-url="{{ route('admin.withdraw.update', ['id' => $model->id]) }}" http-type="post" onsubmit="return false;">
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label">User ID</label>
                      <input type="text" class="form-control" value="{{ $model->username }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Status</label>
                      <select class="form-control" name="status">
                        <option value="process" @if ($model->status == 'process') selected="" @endif>Process</option>
                        <option value="done" @if ($model->status == 'done') selected="" @endif>Done</option>
                        <option value="reject" @if ($model->status == 'reject') selected="" @endif>Reject</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="control-label">Amount</label>
                      <input type="number" step="any" class="form-control" value="{{ (float) $model->amount }}" required="" name="amount">
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
