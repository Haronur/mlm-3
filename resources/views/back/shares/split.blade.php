<?php
  use App\Repositories\SharesRepository;
  $repo = new SharesRepository;
  $state = $repo->getCurrentShareState();
?>

@extends('back.app')

@section('title')
  Split | {{ config('app.name') }} 
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('back.include.header')
    @include('back.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          <div class="page-title">
            <h2>Split Shares</h2>
          </div>

          <div class="row mrg20T">

            <div class="col-md-4">
              <a href="#" title="Wallet" id="removeSharesBtn" data-url="{{ route('admin.shares.removeQueue') }}" class="tile-box tile-box-alt btn-danger">
                <div class="tile-header">
                  Current Price: {{ number_format($state->current_price, 3) }}
                </div>
                <div class="tile-content-wrapper">
                  <i class="glyph-icon icon-times opacity-80 font-size-20"></i> Remove Queued Shares
                </div>
              </a>
            </div>

            <div class="col-md-8">
              <div class="panel">
                <div class="panel-body">
                  <div class="example-box-wrapper">
                    <form role="form" id="splitForm" onsubmit="return false;" class="action-form" http-type="post" data-url="{{ route('admin.postSplit') }}">
                      <fieldset>
                        <div class="form-group">
                          <label class="control-label">Split To</label>
                          <input type="number" step="0.001" class="form-control" value="0" required="" name="split_to">
                        </div>

                        <div class="form-group">
                          <label class="control-label">Split By</label>
                          <input type="number" step="any" min="0" class="form-control" name="split_by" required="" value="0">
                        </div>

                        <div class="form-group">
                          <button type="submit" class="btn btn-primary">
                            <span class="btn-preloader">
                              <span class="icon-spin icon-spin-1"></span>
                            </span>
                            <span>Submit</span>
                          </button>
                          <button type="reset" class="btn btn-default">Cancel</button>
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
@stop
