<?php
use App\Models\Package;
$packages = Package::all();
?>

@extends('back.app')

@section('title')
Register New Member | {{ config('app.name') }}
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
            <h2>Register ROOT Member</h2>
            <p>ROOT Member</p>
          </div>

          <div class="row">
            <div class="col-md-8">
              <form class="action-form" data-parsley-validate="" role="form" id="registerForm" http-type="post" data-url="{{ route('admin.member.postRegister', ['type' => 'root']) }}">
                <fieldset>
                  <div class="form-group">
                    <label class="control-label" for="inputPackage">Package</label>
                    <div class="input-group">
                      <select class="form-control" name="package_id" id="inputPackage" required="">
                        @if (count($packages) > 0)
                        @foreach ($packages as $package)
                        <option value="{{ $package->id }}">
                          {{ number_format($package->package_amount, 0) }}
                        </option>
                        @endforeach
                        @endif
                      </select>
                      <span class="input-group-addon">GBP</span>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="control-label">Email</label>
                    <input type="email" name="email" class="form-control" required="">
                  </div>

                  <div class="form-group">
                    <label class="control-label">Username</label>
                    <input type="text" name="username" class="form-control" required="">
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="inputSecPassword">Secret Password</label>
                    <input type="password" id="inputSecPassword" name="secret_password" class="form-control" required="">
                  </div>

                  <div class="form-group">
                    <label class="control-label">Retype Secret Password</label>
                    <input type="password" data-parsley-equalto="#inputSecPassword" class="form-control" required="">
                  </div>

                  <div class="form-group">
                    <label class="control-label" for="inputPassword">Password</label>
                    <input type="password" id="inputPassword" name="password" class="form-control" required="">
                  </div>

                  <div class="form-group">
                    <label class="control-label">Re-Password</label>
                    <input type="password" data-parsley-equalto="#inputPassword" class="form-control" required="">
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
@stop
