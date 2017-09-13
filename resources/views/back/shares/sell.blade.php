@extends('back.app')

@section('title')
  Sell Shares | {{ config('app.name') }} 
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
            <h2>Sell Shares By Company</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <form role="form" onsubmit="return false;" data-parsley-validate class="action-form shares-form" id="sellSharesForm" http-type="post" data-url="{{ route('admin.shares.postSell') }}">
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label">Price</label>
                      <input type="text" name="price" class="form-control" placeholder="Use dot for decimal separator..">
                      <span class="help-block">example: 0.200</span>
                    </div>

                    <div class="form-group">
                      <label class="control-label">Quantity</label>
                      <input type="number" min="10" class="form-control" required="" name="quantity" value="10">
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
@stop
