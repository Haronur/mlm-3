<button class="btn btn-info btn-hover btn-show" title="{{ \Lang::get('sharesStatement.detail') }}" data-url="{{ route('shares.sell.statement', ['lang' => \App::getLocale(), 'id' => $model->id]) }}" data-toggle="modal" data-target="#showModal">
  <span>@lang('sharesStatement.detail')</span>
  <i class="glyph-icon icon-arrow-right"></i>
</button>
