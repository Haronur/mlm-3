<?php 
  $lang = \App::getLocale();
  $title = null;
  $content = null;
  $announcementModel = new \App\Models\Announcement;

  if (isset($model->{"title_$lang"})) $title = $model->{"title_$lang"};
  else $title = $model->title_en;
  if (isset($model->{"content_$lang"})) $content = $model->{"content_$lang"};
  else $content = $model->content_en;
?>

@extends('front.app')

@section('title')
  {{ $title }} | {{ config('app.name') }}
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
              <h2><span class="glyph-icon icon-linecons-megaphone"></span> {{ $title }}</h2>
            </div>

            <div class="row">
              <?php $before = $announcementModel->where('id', '<', $model->id)->orderBy('id','desc')->first(); ?>
              @if ($before)
              <?php
                if (isset($before->{"title_$lang"})) $beforeTitle = $before->{"title_$lang"};
                else $beforeTitle = $before->title_en;
              ?>
              <div class="col-md-2">
                <a href="{{ route('announcement.read', ['lang' => $lang, 'id' => $before->id]) }}">
                  <i class="glyph-icon icon-angle-left"></i> {{ $beforeTitle }}
                </a>
              </div>
              @endif

              <div class="col-md-8">
                <div class="well white clearfix">
                  <p class="theme-text pull-right"><i class="md md-alarm"></i> {{ $model->created_at->format('d F Y H:i A') }}</p>
                  <div class="pull-left">
                    {!! $content !!}
                  </div>
                </div>
              </div>

              <?php $after = $announcementModel->where('id', '>', $model->id)->orderBy('id','asc')->first(); ?>
              @if ($after)
              <?php
                if (isset($after->{"title_$lang"})) $afterTitle = $after->{"title_$lang"};
                else $afterTitle = $after->title_en;
              ?>
              <div class="col-md-2">
                <a href="{{ route('announcement.read', ['lang' => $lang, 'id' => $after->id]) }}">
                  <i class="glyph-icon icon-angle-left"></i> {{ $afterTitle }}
                </a>
              </div>
              @endif
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@stop
