@extends('front.app')

@section('title')
  @lang('sharesStatement.title') | {{ config('app.name') }}
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
              <h2>@lang('sharesStatement.title')</h2>
              <p>@lang('sharesStatement.subTitle')</p>
            </div>

            <div class="panel">
              <div class="panel-body">
                <div class="example-box-wrapper">
                  <ul class="list-group list-group-separator row list-group-icons">
                    <li class="col-md-4 active">
                      <a href="#tabSell" data-toggle="tab" class="list-group-item">
                        <i class="glyph-icon font-red icon-minus-circle"></i>
                        @lang('sharesStatement.sellList')
                      </a>
                    </li>
                    <li class="col-md-4">
                      <a href="#tabBuy" data-toggle="tab" class="list-group-item">
                        <i class="glyph-icon icon-plus-circle"></i>
                        @lang('sharesStatement.buyList')
                      </a>
                    </li>
                    <li class="col-md-4">
                      <a href="#tabReturn" data-toggle="tab" class="list-group-item">
                        <i class="glyph-icon font-primary icon-mail-reply"></i>
                        @lang('sharesStatement.returnList')
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div class="tab-pane fade active in" id="tabSell">
                      <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('shares.sellList', ['lang' => \App::getLocale()]) }}">
                        <thead>
                          <tr>
                            <th data-id="created_at" data-priority="1">@lang('sharesStatement.sellTitle')</th>
                            <th data-id="id">@lang('sharesStatement.id')</th>
                            <th data-id="amount">@lang('sharesStatement.amount')</th>
                            <th data-id="amount_left">@lang('sharesStatement.amountLeft')</th>
                            <th data-id="share_price">@lang('sharesStatement.price')</th>
                            <th data-id="total" data-priority="1">@lang('sharesStatement.total')</th>
                            <th data-id="action" data-priority="1"></th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>

                    <div class="tab-pane fade" id="tabBuy">
                      <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('shares.buyList') }}">
                        <thead>
                          <tr>
                            <th data-id="created_at">@lang('sharesStatement.buyTitle')</th>
                            <th data-id="amount">@lang('sharesStatement.amount')</th>
                            <th data-id="share_price">@lang('sharesStatement.price')</th>
                            <th data-id="total">@lang('sharesStatement.total')</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                      </table>
                    </div>

                    <div class="tab-pane fade" id="tabReturn">
                      <div class="row">
                        <div class="col-md-6">
                          <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('shares.returnList', ['lang' => \App::getLocale()]) }}">
                            <thead>
                              <tr>
                                <th data-id="created_at">@lang('sharesStatement.returnTitle')</th>
                                <th data-id="amount">@lang('sharesStatement.amount')</th>
                              </tr>
                            </thead>
                            <tbody>
                            </tbody>
                          </table>
                        </div>

                        <div class="col-md-6">
                          <table class="table table-full table-full-small dt-responsive display nowrap table-grid" cellspacing="0" width="100%" role="grid" data-url="{{ route('shares.splitList', ['lang' => \App::getLocale()]) }}">
                            <thead>
                              <tr>
                                <th data-id="created_at">@lang('sharesStatement.splitTitle')</th>
                                <th data-id="amount">@lang('sharesStatement.amount')</th>
                              </tr>
                            </thead>
                            <tbody>
                            </tbody>
                          </table>
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
  </div>
</div>

<div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="showModalLabel">
  <div class="modal-dialog" role="document" style="width:100%;">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="showModalLabel">@lang('sharesStatement.sellModalTitle')</h4>
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

        <div id="modalContent">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger btn-raised" data-dismiss="modal">@lang('common.close')</button>
      </div>
    </div>
  </div>
</div>

@stop
