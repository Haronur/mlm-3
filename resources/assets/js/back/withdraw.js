export class Withdraw {
  constructor () {
    if ($('#withdrawListTable').length) {
      this.list()
    }
  }
  list () {
    var $table = $('#withdrawListTable')
    var $loader = $('#pageLoader')

    $table.on('click', '.btn-confirm', function () {
      var $this = $(this)
      if (confirm('Confirm this withdraw?')) { // eslint-disable-line no-undef
        $loader.show()
        $.ajax({
          type: 'post',
          url: $this.data('url'),
          data: {
            status: 'done'
          },
          success: function (e) {
            noty({ // eslint-disable-line no-undef
              type: e.type,
              text: e.message
            })
            $loader.hide()
          },
          error: function (xhr) {
            noty({ // eslint-disable-line no-undef
              type: 'error',
              text: xhr.responseText
            })
            $loader.hide()
          }
        })
      }
    })

    $table.on('click', '.btn-reject', function () {
      var $this = $(this)
      if (confirm('Reject this withdraw?')) { // eslint-disable-line no-undef
        $loader.show()
        $.ajax({
          type: 'post',
          url: $this.data('url'),
          data: {
            status: 'reject'
          },
          success: function (e) {
            noty({ // eslint-disable-line no-undef
              type: e.type,
              text: e.message
            })
            $loader.hide()
          },
          error: function (xhr) {
            noty({ // eslint-disable-line no-undef
              type: 'error',
              text: xhr.responseText
            })
            $loader.hide()
          }
        })
      }
    })
  }
}
