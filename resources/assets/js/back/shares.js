export class Shares {
  constructor () {
    if ($('#sharesListTable').length) {
      this.list()
    }

    if ($('#removeSharesBtn').length) {
      this.removeQueue()
    }

    if ($('#splitForm').length) {
      this.split()
    }

    if ($('#sharesFreezeListTable').length) {
      this.freezeList()
    }

    if ($('#sharesBuyListTable').length) {
      this.buyList()
    }

    if ($('#sharesSellListTable').length) {
      this.sellList()
    }

    if ($('#sharesFollowListTable').length) {
      this.followList()
    }
  }
  list () {
    var $table = $('#sharesListTable')
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
  removeQueue () {
    var $button = $('#removeSharesBtn')
    $button.on('click', function () {
      if (confirm('Remove? Cannot be undo.')) {
        var $this = $(this)
        $this.disable(true)

        $.post($this.data('url')).done(function (e) {
          noty({
            text: e.message,
            type: e.type
          })
          $this.disable(false)
        }).fail(function (xhr, status, e) {
          noty({
            text: xhr.responseText,
            type: 'error'
          })
          $this.disable(false)
        })
      }
    })
  }
  split () {
    var currentShares = parseFloat($('#currentShares').text())
    var $form = $('#splitForm')
    var $splitTo = $form.find('[name=split_to]')
    var $splitBy = $form.find('[name=split_by]')

    $splitTo.on('input', function () {
      var $this = $(this)
      var splitBy = currentShares / parseFloat($this.val())
      $splitBy.val(splitBy.toFixed(3))
    })
  }
  freezeList () {
    var $table = $('#sharesFreezeListTable')
    var $loader = $('#pageLoader')
    var processing = false

    $table.on('click', '.btn-unlock', function (e) {
      var $this = $(this)

      if (confirm('Unlock?')) {
        if (!processing) {
          $loader.show()
          processing = true

          $.ajax({
            type: 'post',
            url: $this.data('url'),
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

    $table.on('click', '.btn-edit', function (e) {
      var $this = $(this)
      var $row = $this.closest('tr')
      if (confirm('Update?')) {
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
  buyList () {
    var $table = $('#sharesBuyListTable')
    var $loader = $('#pageLoader')
    var processing = false

    $table.on('click', '.btn-edit', function (e) {
      var $this = $(this)
      var $row = $this.closest('tr')
      if (confirm('Update?')) {
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
  sellList () {
    var $table = $('#sharesSellListTable')
    var $loader = $('#pageLoader')
    var processing = false

    $table.on('click', '.btn-edit', function (e) {
      var $this = $(this)
      var $row = $this.closest('tr')
      if (confirm('Update?')) {
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
  followList () {
    var $table = $('#sharesFollowListTable')
    var $loader = $('#pageLoader')
    var processing = false

    $table.on('click', '.btn-unlock', function (e) {
      var $this = $(this)

      if (confirm('Unlock?')) {
        if (!processing) {
          $loader.show()
          processing = true

          $.ajax({
            type: 'post',
            url: $this.data('url'),
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
