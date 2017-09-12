<a class="btn btn-hover btn-warning" title="Edit" href="{{ route('admin.member.edit', ['id' => $model->member_id]) }}">
  <i class="glyph-icon icon-pencil"></i>
  <span>Edit</span>
</a>

<a class="btn btn-hover btn-info" title="Statement" href="{{ route('admin.wallet.statement', ['id' => $model->member_id]) }}">
  <i class="glyph-icon icon-eye"></i>
  <span>Compare</span>
</a>
