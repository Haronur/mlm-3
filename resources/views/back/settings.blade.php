@extends('back.app')

@section('title')
  Account Settings | {{ config('app.name') }} 
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
            <h2>Account Settings</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <form data-parsley-validate="" role="form" class="form-floating action-form" id="accountBasicForm" http-type="post" data-url="{{ route('admin.account.postUpdate') }}">
                  <fieldset>
                    <div class="form-group">
                      <div class="alert alert-info">
                        Empty password fields below if you do not want to change password.
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="control-label" id="inputPassword">Account Password</label>
                      <input type="password" name="password" class="form-control" id="inputPassword">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Re Password</label>
                      <input type="password" class="form-control" data-parsley-equalto="#inputPassword">
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-primary">
                        <span class="btn-preloader">
                          <i class="icon-spin icon-spin-1"></i>
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
