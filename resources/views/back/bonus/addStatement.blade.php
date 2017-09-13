@extends('back.app')

@section('title')
  Add Bonus Statement | {{ config('app.name') }} 
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
                <form role="form" onsubmit="return false;" data-parsley-validate class="action-form" id="bonusStatementForm" http-type="post" data-url="{{ route('admin.bonus.add') }}">
                    <fieldset>
                      <div class="form-group">
                        <label class="control-label">Member ID</label>
                        <input type="text" name="username" required="" class="form-control">
                      </div>

                      <div class="form-group">
                        <label class="control-label">Type</label>
                        <select class="form-control" name="type" required="">
                          <option value="direct">Direct</option>
                          <option value="override">Override</option>
                          <option value="group">Group</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label class="control-label">Cash</label>
                        <input type="number" step="any" class="form-control" name="cash" required="" value="0">
                        <span class="help-block">use dots(.) for decimals</span>
                      </div>

                      <div class="form-group">
                        <label class="control-label">Promotion</label>
                        <input type="number" step="any" class="form-control" name="promotion" required="" value="0">
                        <span class="help-block">use dots(.) for decimals</span>
                      </div>

                      <div class="form-group">
                        <label class="control-label">Total</label>
                        <input type="number" step="any" class="form-control" name="total" required="">
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
