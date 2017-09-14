var $container = $('#unilevelNetwork')
var container = document.getElementById('unilevelNetwork')
var $form = $('#unilevelForm')
var searchUrl = $form.data('url')
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
      direction: 'UD'
    }
  },
  groups: {
    main: {
      color: {
        background:'red'
      },
      shape: 'diamond'
    },
    child: {
      shape: 'icon',
      icon: {
        face: 'FontAwesome',
        code: '\uf007',
        size: 50,
        color: 'orange'
      }
    }
  }
}
var $loader = $('#pageLoader')

export class Network {
  constructor () {
    if ($container.length) {
      this.unilevel()
    }

    var $class = this

    if ($form.length) {
      $form.on('click', '[type=submit]', function (e) {
        e.preventDefault()
        if (confirm('Search?')) {
          var $this = $(this)
          var $input = $form.find(':input')
          $input.prop('readonly', true)
          $this.disable(true)
          $loader.show()
          $container.empty()

          $.ajax({
            type: 'post',
            url: searchUrl,
            data: {
              data: $form.serializeForm()
            },
            success: function (e) {
              $loader.hide()
              $input.prop('readonly', false)
              $this.disable(false)
              if (e.type === 'success') {
                var nodes = new vis.DataSet(e.data.nodes)
                var network = new vis.Network(container, e.data, options)
                network.on("doubleClick", function (params) {
                  var node = params.nodes
                  var selectedNode = nodes.get(node)
                  $class.getNetworkModal(selectedNode[0].label)
                })
              } else {
                noty({
                  text: e.message,
                  type: 'error'
                })
              }
            },
            error: function (xhr, status, e) {
              $loader.hide()
              $input.prop('readonly', false)
              $this.disable(false)
              noty({
                text: 'Something went wrong',
                type: 'error'
              })
            }
          })
        }
      })
    }
  }
  unilevel () {
    $loader.show()
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
        $loader.hide()
      }).fail(function (xhr, status, e) {
        noty({
          text: 'Something went wrong',
          type: 'error'
        })
      })
    }
    getNetwork (username) {
      var $class = this
      $container.empty()
      $loader.show()
      var searchUrl = $form.data('url')
      var formData = {
        'u': username,
        's': $form.find('[name=s]').val()
      }
      var $button = $form.find('button')
      var $input = $form.find(':input')

      $.ajax({
        type: 'post',
        url: searchUrl,
        data: {
          data: formData
        },
        success: function (e) {
          $loader.hide()
          $input.prop('readonly', false)
          $button.disable(false)
          if (e.type === 'success') {
            var nodes = new vis.DataSet(e.data.nodes)
            var network = new vis.Network(container, e.data, options)
            network.on("doubleClick", function (params) {
              var node = params.nodes
              var selectedNode = nodes.get(node)
              $class.getNetwork(selectedNode[0].label)
            })
          } else {
            noty({
              text: e.message,
              type: 'error'
            })
          }
        },
        error: function (xhr, status, e) {
          $loader.hide()
          $input.prop('readonly', false)
          $button.disable(false)
          noty({
            text: 'Something went wrong',
            type: 'error'
          })
        }
      })
    }
    getNetworkModal (username) {
      var $modal = $('#showModal')
      var $modalLoader = $modal.find('.loading')
      var $modalError = $modal.find('.error')
      var $modalContent = $modal.find('#modalContent')

      $modalLoader.show()
      $modalError.hide()
      $modalContent.empty()
      $modal.modal('show')
      $.ajax({
        type: 'get',
        dataType: 'html',
        url: $container.data('show') + '?u=' + username,
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
    }
  }
