<a href="{{ route('admin.announcement.edit', ['id' => $model->id]) }}" class="btn btn-hover btn-warning">
  <i class="glyph-icon icon-pencil"></i>
  <span>Edit</span>
</a>

<button class="btn btn-hover btn-delete btn-danger" data-url="{{ route('admin.announcement.remove', ['id' => $model->id]) }}">
  <i class="glyph-icon icon-trash"></i>
  <span>Remove</span>
</button>
