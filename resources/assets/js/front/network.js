export class Network {
  constructor () {
    if ($('#unilevelNetwork').length) {
      this.unilevel()
    }

    if ($('#unilevelForm').length) {
      var $form = $('#unilevelForm')
      var searchUrl = $form.data('url')
      var $loader = $('#pageLoader')
      $form.on('click', '[type=submit]', function () {
        if (confirm('Search?')) {
          var $this = $(this)
          var $input = $form.find(':input')
          $input.prop('readonly', true)
          $this.disable(true)

          $.ajax({
            type: 'post',
            url: searchUrl,
            data: {
              data: $form.serializeForm()
            },
            success: function (e) {
              $input.prop('readonly', false)
              $this.disable(false)
              if (e.type === 'error') {
                noty({
                  text: e.message,
                  type: e.type
                })
              } else {
                window.location.replace(e.redirect)
              }
            }
          })
        }
      })
    }
  }
  unilevel () {
    var $network = $('#unilevelNetwork')
    var linkElem = document.createElement('link')
    document.getElementsByTagName('head')[0].appendChild(linkElem)
    linkElem.rel = 'stylesheet'
    linkElem.type = 'text/css'
    linkElem.href = window._root + '/lib/tree.css'

    $.when(
      $.getScript(window._root + '/lib/tree.js'),
      $.Deferred(function (deferred) {
        $(deferred.resolve)
      })
    ).done(function () {
      $network.jstree({
        'core': {
          'data': {
            'url': function (node) {
              return node.id === '#' ? $network.data('url') : $network.data('url') + '&pid=' + node.id
            }
          }
        }
      })

      var $modal = $('#showModal')
      var $modalLoader = $modal.find('.loading')
      var $modalError = $modal.find('.error')
      var $modalContent = $modal.find('#modalContent')

      $network.on('click', '[data-toggle="modal"]', function (e) {
        e.preventDefault()
        let $this = $(this)
        $modalLoader.show()
        $modalError.hide()
        $modalContent.empty()
        $.ajax({
          type: 'get',
          dataType: 'html',
          url: $network.data('show') + '?u=' + $this.data('id'),
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
    })
  }
}
