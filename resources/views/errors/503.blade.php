@extends('front.app')

@section('title')
Maintenance - {{ config('app.name') }}
@stop

@section('content')

<img src="{{ asset('assets/img/blurred-bg/blurred-bg-4.jpg') }}" class="login-img" alt="">

<div class="center-vertical">
  <div class="center-content row">
    <div class="col-md-6 center-margin">
      <div class="server-message inverse">
        <h2>MAINTENANCE[维护中]</h2>
        <p>We are sorry, system is processing server maintenance currently, thanks for your patient and please try again later. Thank you.</p>
        <p>您好，目前系统正在进行例行维护，请稍后再试，谢谢。</p>
      </div>
    </div>
  </div>
</div>
@stop
