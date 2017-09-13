@if (!$model->is_queued)
  <button class="btn btn-unlock btn-success btn-hover" data-url="{{ route('admin.sharesFollow.unlock', ['id' => $model->id]) }}">
    <i class="glyph-icon icon-unlock"></i>
    <span>Unlock</span>
  </button>
@endif
