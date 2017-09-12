<a class="btn btn-warning btn-hover" title="Detail" href="{{ route('admin.bonus.edit', ['id' => $data['model']->id, 'type' => $data['type']]) }}">
  <i class="glyph-icon icon-pencil"></i>
  <span>Edit</span>
</a>

<button class="btn btn-delete btn-danger btn-hover" data-url="{{ route('admin.bonus.remove', ['type' => $data['type'], 'id' => $data['model']->id]) }}">
  <i class="glyph-icon icon-trash"></i>
  <span>Remove</span>  
</button>
