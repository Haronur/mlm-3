export class Package {
  constructor () {
    if ($('#packageListTable').length) {
      var $table = $('#packageListTable')
      var $loader = $('#pageLoader')
      var processing = false

      $table.on('click', '[type=submit]', function (e) {
        var $this = $(this)
        var $row = $this.closest('tr')

        if (confirm('Submit?')) {
          if (!processing) {
            $loader.show()
            processing = true

            $.ajax({
              type: 'post',
              url: $this.data('url'),
              data: {
                data: $row.serializeForm()
              },
              success: function (e) {
                $loader.hide()
                processing = false
                noty({
                  type: e.type,
                  text: e.message
                })
              },
              error: function (xhr, status, e) {
                $loader.hide()
                processing = false
                noty({
                  type: 'error',
                  text: xhr.responseText
                })
              }
            })
          } else {
            noty({
              type: 'information',
              text: 'A process is still ongoing.'
            })
          }
        }
      })
    }
  }
}
