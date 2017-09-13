@extends('back.app')

@section('title')
  Edit Announcement | {{ config('app.name') }} 
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
            <h2>Edit Announcement</h2>
          </div>

          <div class="panel">
            <div class="panel-body">
              <div class="example-box-wrapper">
                <form role="form" data-url="{{ route('admin.announcement.update', ['id' => $model->id]) }}" data-parsley-validate="" onsubmit="return false;" id="editAnnouncementForm" data-upload="{{ route('admin.image.upload') }}">
                  <fieldset>
                    <div class="form-group">
                      <label class="control-label">English Title</label>
                      <input type="text" class="form-control" name="title_en" required="" value="{{ $model->title_en }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label">English Content</label>
                      <textarea name="content_en" class="form-control" id="editorEN">{!! $model->content_en !!}</textarea>
                    </div>

                    <div class="form-group">
                      <label class="control-label">Chinese Simplified Title</label>
                      <input type="text" class="form-control" name="title_chs" required="" value="{{ $model->title_chs }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Chinese Simplified Content</label>
                      <textarea name="content_chs" class="form-control" id="editorCHS">{!! $model->content_chs !!}</textarea>
                    </div>

                    <div class="form-group">
                      <label class="control-label">Chinese Traditional Title</label>
                      <input type="text" class="form-control" name="title_cht" required="" value="{{ $model->title_cht }}">
                    </div>

                    <div class="form-group">
                      <label class="control-label">Chinese Traditional Content</label>
                      <textarea name="content_cht" class="form-control" id="editorCHT">{!! $model->content_cht !!}</textarea>
                    </div>

                    <div class="form-group">
                      <label class="control-label">Date</label>
                      <input type="text" name="created_at" class="form-control" required="" value="{{ $model->created_at }}">
                      <span class="help-block">YYYY-MM-DD HH:mm:ss format</span>
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
