<a class="btn btn-warning btn-hover" title="Detail" href="{{ route('admin.transfer.edit', ['id' => $model->id]) }}">
  <i class="glyph-icon icon-pencil"></i>
  <span>Edit</span>
</a>

<button class="btn btn-delete btn-danger btn-hover" data-url="{{ route('admin.withdraw.remove', ['id' => $model->id]) }}">
  <i class="glyph-icon icon-trash"></i>
  <span>Remove</span> 
</button>
