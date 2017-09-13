@extends('back.app')

@section('title')
Add WD Statement | {{ config('app.name') }} 
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
            <h2>Add WD Statement</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <form role="form" onsubmit="return false;" data-parsley-validate class="action-form shares-form" id="withdrawStatementForm" http-type="post" data-url="{{ route('admin.withdraw.add') }}">
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label">Member ID</label>
                      <input type="text" name="username" required="" class="form-control">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Status</label>
                      <select class="form-control" name="status" required="">
                        <option value="process">Process</option>
                        <option value="done">Done</option>
                        <option value="reject">Reject</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="control-label">Amount</label>
                      <input type="number" step="any" class="form-control" name="amount" required="">
                      <span class="help-block">use dots(.) for decimals</span>
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
