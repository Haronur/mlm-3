@extends('front.app')

@section('title')
Login - {{ config('app.name') }}
@stop

@section('content')

<div class="center-vertical full-bg-4" style="-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover">
  <div class="center-content row">
    <form onsubmit="return false;" http-type="post" data-url="{{ route('login.post', ['lang' => $lang]) }}" id="login-validation" class="action-form col-md-4 col-sm-5 col-xs-11 col-lg-3 center-margin">
      <h3 class="text-center pad25B font-gray text-transform-upr font-size-23"><span class="opacity-80"><a href="{{ route('login', ['lang' => 'en']) }}" class="font-white">English</a> | <a href="{{ route('login', ['lang' => 'chs']) }}" class="font-white">简体中文</a> | <a class="font-white" href="{{ route('login', ['lang' => 'cht']) }}">繁體中文</a></span></h3>
      <div id="login-form" class="content-box bg-default">
        <div class="content-box-wrapper pad20A">
          <img class="mrg25B center-margin radius-all-100 display-block" src="{{ asset('assets/img/logo.png') }}" alt="">
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon addon-inside bg-gray">
                <i class="glyph-icon icon-user"></i>
              </span>
              <input type="text" name="username" class="form-control" id="inputUsername" placeholder="Enter username">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon addon-inside bg-gray">
                <i class="glyph-icon icon-unlock-alt"></i>
              </span>
              <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-block btn-primary">
              <span class="btn-preloader"><span class="icon-spin icon-spin-1"></span></span>
              <span>Login</span>
            </button>
          </div>
          <div class="row">
            <div class="checkbox checkbox-primary col-md-6" style="height: 20px;">
              <label>
                <input type="checkbox" name="remember" id="loginCheckbox1" class="custom-checkbox"> Remember me
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

@stop
