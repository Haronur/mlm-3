@extends('back.app')

@section('title')
Add Transfer Statement | {{ config('app.name') }} 
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
            <h2>Add Transfer Statement</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <form role="form" onsubmit="return false;" data-parsley-validate class="action-form" id="transferStatementForm" http-type="post" data-url="{{ route('admin.transfer.add') }}">
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label">From Member ID</label>
                      <input type="text" name="from" required="" class="form-control">
                    </div>

                    <div class="form-group">
                      <label class="control-label">To Member ID</label>
                      <input type="text" name="to" required="" class="form-control">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Type</label>
                      <select class="form-control" name="type" required="">
                        <option value="cash">Cash</option>
                        <option value="promotion">Promotion</option>
                        <option value="register">Register</option>
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
