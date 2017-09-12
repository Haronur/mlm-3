@extends('front.app')

@section('title')
@lang('home.title') | {{ config('app.name') }}
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('front.include.header')
    @include('front.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          <div class="row">
            <div id="page-title">
              <h2>@lang('settings.title1')</h2>
              <p>@lang('settings.subTitle1')</p>
            </div>

            <div class="row">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@stop
