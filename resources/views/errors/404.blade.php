@extends('front.app')

@section('title')
Page Not Found - {{ config('app.name') }}
@stop

@section('content')

<img src="{{ asset('assets/img/blurred-bg/blurred-bg-5.jpg') }}" class="login-img" alt="">

<div class="center-vertical">
  <div class="center-content row">
    <div class="col-md-6 center-margin">
      <div class="server-message inverse">
        <h2>Page Not Found</h2>
        <p>GO BACK, you are not supposed to be here.</p>
      </div>
    </div>
  </div>
</div>
@stop
