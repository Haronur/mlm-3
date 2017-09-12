<button class="btn btn-info btn-hover btn-show" title="Detail" data-url="{{ route('admin.withdraw.show', ['id' => $model->id]) }}" data-toggle="modal" data-target="#showModal">
  <i class="glyph-icon icon-eye"></i>
  <span>Detail</span>
</button>

<a class="btn btn-warning btn-hover" title="Edit" href="{{ route('admin.withdraw.edit', ['id' => $model->id]) }}">
  <i class="glyph-icon icon-pencil"></i>
  <span>Edit</span>
</a>

<button class="btn btn-delete btn-danger btn-hover" title="Remove" data-url="{{ route('admin.withdraw.remove', ['id' => $model->id]) }}">
  <i class="glyph-icon icon-trash"></i>
  <span>Remove</span> 
</button>
