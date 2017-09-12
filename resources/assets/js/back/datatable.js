export class DataTable {
  constructor () {
    var $tables = $('.table-grid')
    var $modal = $('#showModal')
    var $modalLoader = $modal.find('.loading')
    var $modalError = $modal.find('.error')
    var $modalContent = $modal.find('#modalContent')
    var $loader = $('#pageLoader')

    $tables.each(function (e) {
      var $table = $(this)
      var columns = []

      $table.find('th').each(function () {
        let $thead = $(this)
        let columnValue = {}
        columnValue['data'] = $thead.data('id')

        $.each($thead.data(), function (i, value) {
          if (i !== 'id') {
            columnValue[i] = value
          }
        })
        columns.push(columnValue)
      })

      $table.dataTable({
        serverSide: true,
        processing: true,
        language: window._dataTablesLang,
        searchDelay: 1000,
        responsive: true,
        ajax: $table.data('url'),
        columns: columns,
        order: [
          0,
          'desc'
        ]
      })

      $table.on('click', '.btn-show', function (e) {
        e.preventDefault()
        let $this = $(this)
        $modalLoader.show()
        $modalError.hide()
        $modalContent.empty()
        $.ajax({
          type: 'get',
          dataType: 'html',
          url: $this.data('url'),
          success: function (e) {
            $modalLoader.hide()
            $modalContent.html(e)
          },
          error: function (xhr, status, e) {
            $modalLoader.hide()
            $modalError.show()
            console.log(xhr.responseText)
          }
        })
      })

      $table.on('click', '.btn-delete', function (e) {
        e.preventDefault()
        if (confirm('Remove?')) { // eslint-disable-line no-undef
          $loader.show()
          let $this = $(this)
          $.ajax({
            type: 'delete',
            url: $this.data('url'),
            success: function (e) {
              $loader.hide()
              noty({ // eslint-disable-line no-undef
                text: e.message,
                type: e.type
              })
              if (e.type === 'success') {
                $this.parents('tr').remove()
              }
            },
            error: function (xhr, status, e) {
              $loader.hide()
              noty({ // eslint-disable-line no-undef
                text: xhr.responseText,
                type: 'error'
              })
            }
          })
        }
      })
    })
  }
}
