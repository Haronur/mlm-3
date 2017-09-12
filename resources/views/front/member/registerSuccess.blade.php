<?php
use App\Models\Package;
$packages = Package::all();
?>

@extends('front.app')

@section('title')
  @lang('success.title') | {{ config('app.name') }}
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('front.include.header')
    @include('front.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          <div id="page-title">
            <h2><span class="glyph-icon icon-linecons-thumbs-up"></span> @lang('success.title')</h2>
          </div>

          <div class="row mrg45B">
            <div class="col-md-8">
              <div class="well white text-center">
                <h1>@lang('success.text1')</h1>
                <br>
                <p>@lang('success.text2')</p>
                <br>
                <h3 class="font-red">{{ $model->username }}</h3>
                <br>
                <a href="{{ route('member.register', ['lang' => \App::getLocale()]) }}" class="btn btn-primary mrg10T">
                  <span class="glyph-icon icon-mail-reply"></span> @lang('success.back')
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@stop
