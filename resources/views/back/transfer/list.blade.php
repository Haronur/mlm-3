@extends('back.app')

@section('title')
  All Transfer Statement | {{ config('app.name') }} 
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('back.include.header')
    @include('back.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
        </div>
      </div>
    </div>
  </div>
</div>
@stop
