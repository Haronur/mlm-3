export class Shares {
  constructor () {
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
