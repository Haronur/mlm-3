<div class="row">
  <div class="col-md-12">
    <table class="table table-striped table-hover">
      <thead class="theme-text">
        <tr>
          <th colspan="3">@lang('unilevel.modal.info')</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-warning"><strong>@lang('unilevel.modal.id')</strong></td>
          <td>:</td>
          <td>{{ $model->username }}</td>
        </tr>

        <tr>
          <td class="text-warning"><strong>@lang('unilevel.modal.join')</strong></td>
          <td>:</td>
          <td>{{ $model->created_at->format('d F Y') }}</td>
        </tr>

        <tr>
          <td class="text-warning"><strong>@lang('unilevel.modal.package')</strong></td>
          <td>:</td>
          <td>{{ number_format($model->package_amount) }}</td>
        </tr>

        @if ($direct = $model->direct())
          <tr>
            <td class="text-warning"><strong>@lang('unilevel.modal.sponsor')</strong></td>
            <td>:</td>
            <td>{{ $direct->username }}</td>
          </tr>
        @endif

        <?php
          $total = 0;
          $children = $model->findDescendants()->where('id', '!=', $model->id)->get();
          if (count($children) > 0) {
            foreach ($children as $child) {
              $total += $child->package_amount;
            }
          }
        ?>
        <tr>
          <td class="text-warning"><strong>@lang('unilevel.modal.totalSales')</strong></td>
          <td>:</td>
          <td>{{ number_format($total, 0) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
