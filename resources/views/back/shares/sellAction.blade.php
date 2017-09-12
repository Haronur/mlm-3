<button class="btn btn-edit btn-warning btn-hover" data-url="{{ route('admin.sharesSell.update', ['id' => $model->id]) }}">
  <i class="glyph-icon icon-pencil"></i>
  <span>Update</span>
</button>

<button class="btn btn-delete btn-danger btn-hover" data-url="{{ route('admin.sharesSell.remove', ['id' => $model->id]) }}">
  <i class="glyph-icon icon-trash"></i>
  <span>Remove</span>
</button>
