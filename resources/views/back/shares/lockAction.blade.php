@if (!$model->has_process)
  <button class="btn btn-info btn-hover btn-unlock" data-url="{{ route('admin.sharesFreeze.unlock', ['id' => $model->id]) }}">
    <i class="glyph-icon icon-unlock"></i>
    <span>Unlock</span>
  </button>
@endif

<button class="btn btn-edit btn-warning btn-hover" data-url="{{ route('admin.sharesFreeze.update', ['id' => $model->id]) }}">
  <i class="glyph-icon icon-pencil"></i>  <span>Update</span>
</button>

<button class="btn btn-delete btn-danger btn-hover" data-url="{{ route('admin.sharesFreeze.remove', ['id' => $model->id]) }}">
  <i class="glyph-icon icon-trash"></i>  <span>Remove</span>
</button>
