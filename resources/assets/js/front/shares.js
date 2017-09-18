export class Shares {
  constructor () {
    if ($('#chart-shares').length) {
      var $chart = $('#chart-shares')
      var linkElem = document.createElement('link')
      document.getElementsByTagName('head')[0].appendChild(linkElem)
      linkElem.rel = 'stylesheet'
      linkElem.type = 'text/css'
      linkElem.href = window._root + '/lib/c3.css'

      $.when(
        $.getScript(window._root + '/lib/d3.js'),
        $.getScript(window._root + '/lib/c3.js'),
        $.Deferred(function (deferred) {
          $(deferred.resolve)
        })
      ).done(function () {
        $.ajax({
          type: 'post',
          url: $chart.data('url'),
          success: function (e) {
            if (e.type === 'success') {
              $('#sharesTotalSales').text(e.total)
              let chartLine = {
                bindto: '#chart-shares',
                data: {
                  x: 'price',
                  columns: e.data
                },
                axis: {
                  x: {
                    show: false
                  },
                  y: {
                    show: false
                  }
                },
                color: {
                  pattern: ["#f00"]
                },
                legend: {
                  hide: true
                },
                size: {
                  height: 200
                }
              }
              c3.generate(chartLine)
            }
          },
          error: function (xhr, status, e) {
            console.log(xhr.responseText)
            return false
          }
        })

        var $refreshForm = $('#refreshGraphForm')
        $refreshForm.on('click', '[type=submit]', function (e) {
          e.preventDefault()
          var $this = $(this)
          $this.disable(true)

          let min = $refreshForm.find('[name=search_from1]').val() + 
          $refreshForm.find('[name=search_from2]').val()

          $.ajax({
            type: 'post',
            data: {
              min: min
            },
            url: $chart.data('url'),
            success: function (e) {
              $this.disable(false)
              if (e.type === 'success') {
                $('#sharesTotalSales').text(e.total)
                let chartLine = {
                  bindto: '#chart-shares',
                  data: {
                    x: 'price',
                    columns: e.data
                  },
                  axis: {
                    x: {
                      show: false
                    },
                    y: {
                      show: false
                    }
                  },
                  color: {
                    pattern: ["#f00"]
                  },
                  legend: {
                    hide: true
                  },
                  size: {
                    height: 200
                  }
                }
                c3.generate(chartLine)
              }
            },
            error: function (xhr, status, e) {
              $this.disable(false)
              console.log(xhr.responseText)
              return false
            }
          })
        })
      })
    }

    if ($('#transferForm').length) {
      this.transfer()
    }

    if ($('#sharesSellForm').length) {
      var $sellForm = $('#sharesSellForm')
      $sellForm.find('[name=quantity]').on('input', function () {
        let $form = $(this).parents('form')
        let total = $form.find('[name=price] option:selected').val() * $(this).val()
        $form.find('.total-text').text(total.toFixed(3))
        let netTotal = total - (0.1 * total)
        $form.find('.net-total-text').text(netTotal.toFixed(3))
      })

      $sellForm.find('[name=price]').on('change', function () {
        let $form = $(this).parents('form')
        let total = $(this).find(':selected').val() * $('[name=quantity]').val()
        $form.find('.total-text').text(total.toFixed(3))
        let netTotal = total - (0.1 * total)
        $form.find('.net-total-text').text(netTotal.toFixed(3))
      })
    }

    if ($('#sharesBuyForm').length) {
      var $buyForm = $('#sharesBuyForm')
      $sellForm.find('[name=quantity]').on('input', function () {
        let $form = $(this).parents('form')
        let total = $form.find('[name=price] option:selected').val() * $(this).val()
        $form.find('.total-text').text(total.toFixed(3))
      })

      $buyForm.find('[name=price]').on('change', function () {
        let $form = $(this).parents('form')
        let total = $(this).find(':selected').val() * $('[name=quantity]').val()
        $form.find('.total-text').text(total.toFixed(3))
      })
    }
  }
  transfer () {
    var $form = $('#transferForm')
    var $showMemberBtn = $form.find('.btn-show')
    var $modal = $('#showModal')
    var $modalLoader = $modal.find('.loading')
    var $modalError = $modal.find('.error')
    var $modalContent = $modal.find('#modalContent')
    $showMemberBtn.on('click', function (e) {
      e.preventDefault()
      let $this = $(this)
      $modalLoader.show()
      $modalError.hide()
      $modalContent.empty()
      $.ajax({
        type: 'get',
        dataType: 'html',
        url: $this.data('url') + '?u=' + $this.parent().closest('.form-group').find('.form-control').val(),
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
  }
}
