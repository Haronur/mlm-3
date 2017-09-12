@extends('front.app')

@section('title')
@lang('transfer.title') | {{ config('app.name') }}
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
              <h2><span class="glyph-icon icon-share"></span> @lang('transfer.title')</h2>
              <p>@lang('transfer.subTitle')</p>
            </div>

            <div class="row mrg20B">
              <div class="col-md-4">
                <a href="#" title="Wallet" class="tile-box tile-box-alt btn-success">
                  <div class="tile-header">
                    {{ number_format($member->wallet->cash_point, 2) }}
                  </div>
                  <div class="tile-content-wrapper">
                    <i class="glyph-icon icon-money opacity-80 font-size-20"></i> @lang('common.cash')
                  </div>
                </a>
              </div>

              <div class="col-md-4">
                <a href="#" title="Wallet" class="tile-box tile-box-alt btn-info">
                  <div class="tile-header">
                    {{ number_format($member->wallet->register_point, 0) }}
                  </div>
                  <div class="tile-content-wrapper">
                    <i class="glyph-icon icon-money opacity-80 font-size-20"></i> @lang('common.register')
                  </div>
                </a>
              </div>

              <div class="col-md-4">
                <a href="#" title="Wallet" class="tile-box tile-box-alt btn-primary">
                  <div class="tile-header">
                    {{ number_format($member->wallet->promotion_point, 2) }}
                  </div>
                  <div class="tile-content-wrapper">
                    <i class="glyph-icon icon-money opacity-80 font-size-20"></i> @lang('common.promotion')
                  </div>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="panel">
                  <div class="panel-body">
                    <div class="example-box-wrapper">
                      <form id="transferForm" role="form" class="action-form" data-url="{{ route('transaction.postTransfer', ['lang' => \App::getLocale()]) }}" data-parsley-validate="" onsubmit="return false;" http-type="post">
                        <fieldset>
                          <div class="form-group">
                            <label class="control-label">@lang('transfer.transfer')</label>
                            <select class="form-control" name="type">
                              <option value="cash">@lang('common.cash')</option>
                              <option value="promotion">@lang('common.promotion')</option>
                              <option value="register">@lang('common.register')</option>
                            </select>
                          </div>

                          <div class="form-group">
                            <label class="control-label">@lang('transfer.amount')</label>
                            <div class="input-group">
                              <span class="input-group-addon">$</span>
                              <input type="number" min="10" class="form-control" name="amount" required="">
                            </div>
                            <span class="help-block">@lang('transfer.amountNotice')</span>
                          </div>

                          <div class="form-group">
                            <label class="control-label">@lang('transfer.target')</label>
                            <input type="text" class="form-control" name="to_username" required="">
                            <span class="help-block">@lang('transfer.targetNotice')</span>
                            <button type="button" class="btn btn-success btn-show" data-toggle="modal" data-target="#showModal" data-url="{{ route('member.showModal', ['lang' => \App::getLocale()]) }}">
                              <span class="glyph-icon icon-question-circle"></span> @lang('register.checkID')
                            </button>
                          </div>

                          <div class="form-group">
                            <label class="control-label">@lang('transfer.security')</label>
                            <input type="password" class="form-control" name="s" required="">
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
        <h4 class="modal-title" id="showModalLabel">
          <span class="md md-accessibility"></span> @lang('register.modal.title')
        </h4>
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
