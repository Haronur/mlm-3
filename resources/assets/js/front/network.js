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
    linkElem.href = window._root + '/lib/vis.css'

    $.when(
      $.getScript(window._root + '/lib/vis.js'),
      $.Deferred(function (deferred) {
        $(deferred.resolve)
      })
    ).done(function () {
      var container = document.getElementById('unilevelNetwork')
      var options = {
        height: '600px',
        nodes: {
          shape: 'dot',
          size: 36,
          font: {
            size: 24,
            color: '#333'
          },
          borderWidth: 2
        },
        edges: {
          width: 2
        },
        layout: {
          hierarchical: {
            direction: 'Up-Down'
          }
        },
        groups: {
          icons: {
            shape: 'icon',
            icon: {
              face: 'FontAwesome',
              code: '\uf007',
              size: 75,
              color: 'orange'
            }
          },
          source: {
            color: {
              border:'white'
            }
          }
        }
      }
      $.post($network.data('url')).done(function (data) {
        console.log(data)
        new vis.Network(container, data, options)
      })
    })
  }
}
