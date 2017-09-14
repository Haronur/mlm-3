@extends('front.app')

@section('title')
  @lang('terms.title') | {{ config('app.name') }}
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('front.include.header')
    @include('front.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container" id="terms">
          @lang('terms.content')
        </div>
      </div>
    </div>
  </div>
</div>
@stop
