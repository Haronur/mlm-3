@extends('back.app')

@section('title')
  Create Announcement | {{ config('app.name') }} 
@stop

@section('content')
<div id="sb-site">
  <div id="page-wrapper">
    @include('back.include.header')
    @include('back.include.sidebar')
    <div id="page-content-wrapper">
      <div id="page-content">
        <div class="container">
          <div id="page-title">
            <h2>Create Announcement</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <form role="form" data-url="{{ route('admin.announcement.create') }}" data-parsley-validate="" onsubmit="return false;" id="createAnnouncementForm" data-upload="{{ route('admin.image.upload') }}">
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label">English Title</label>
                      <input type="text" class="form-control" name="title_en" required="">
                    </div>

                    <div class="form-group">
                      <label class="control-label">English Content</label>
                      <textarea name="content_en" class="form-control" id="editorEN"></textarea>
                    </div>

                    <div class="form-group">
                      <label class="control-label">Chinese Simplified Title</label>
                      <input type="text" class="form-control" name="title_chs" required="">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Chinese Simplified Content</label>
                      <textarea name="content_chs" class="form-control" id="editorCHS"></textarea>
                    </div>

                    <div class="form-group">
                      <label class="control-label">Chinese Traditional Title</label>
                      <input type="text" class="form-control" name="title_cht" required="">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Chinese Traditional Content</label>
                      <textarea name="content_cht" class="form-control" id="editorCHT"></textarea>
                    </div>

                    <div class="form-group">
                      <button type="submit" class="btn btn-primary">
                        <span class="btn-preloader">
                          <i class="icon-spin icon-spin-1"></i>
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
