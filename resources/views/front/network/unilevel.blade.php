<?php
  if (\Input::has('rid')) {
    $sMember = \App\Models\Member::where('id', trim(\Input::get('rid')))->first();
  } else {
    $sMember = $member;
  }
?>

@extends('front.app')

@section('title')
@lang('unilevel.title') | {{ config('app.name') }}
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
              <h2>@lang('unilevel.title')</h2>
              <p>@lang('unilevel.subTitle')</p>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="panel">
                  <div class="panel-body">
                    <div class="example-box-wrapper">
                      <form onsubmit="return false;" data-parsley-validate="" role="form" id="unilevelForm" data-url="{{ route('member.getUnilevel', ['lang' => \App::getLocale()]) }}">
                        <fieldset>
                          <div class="form-group">
                            <label class="control-label" for="inputMember">@lang('unilevel.member')</label>
                            <input type="text" value="{{ $sMember->username }}" name="u" class="form-control" required="" id="inputMember">
                          </div>

                          <div class="form-group">
                            <label class="control-label" for="inputSecret">@lang('unilevel.secret')</label>
                            <input type="password" name="s" class="form-control" required="" id="inputSecret">
                          </div>

                          <div class="form-group">
                            <button type="submit" class="btn btn-primary">
                              <span class="btn-preloader">
                                <span class="icon-spin icon-spin-1"></span>
                              </span>
                              <span>@lang('common.submit')</span>
                            </button>
                            <button type="reset" class="btn btn-default">@lang('common.cancel')</button>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-8">
                <div class="panel">
                  <div class="panel-body">
                    <div class="example-box-wrapper">
                      <div id="unilevelNetwork" data-url="{{ route('member.unilevelSearch', ['lang' => \App::getLocale()]) . '?rid=' . \Input::get('rid') }}" data-show="{{ route('member.unilevel.modal', ['lang' => $lang]) }}">@lang('unilevel.notice')</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="showModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="showModalLabel">@lang('unilevel.modal.title')</h4>
      </div>
      <div class="modal-body">
        <div class="loading text-center">
          <img src="{{ asset('assets/img/loading.gif') }}" alt="Network Loading">
          <br>
          <small class="text-primary">@lang('common.modal.load')</small>
        </div>

        <div class="error text-center">
          <i class="md md-error"></i>
          <br>
          <small class="text-danger">@lang('common.modal.error')</small>
        </div>

        <div id="modalContent"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger btn-raised" data-dismiss="modal">@lang('common.close')</button>
      </div>
    </div>
  </div>
</div>

@stop
