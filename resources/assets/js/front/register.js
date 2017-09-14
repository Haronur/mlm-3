export class Register {
  constructor () {
    if ($('#registerForm').length) {
      let $form = $('#registerForm')
      let $regText = $form.find('#registerPointValue')
      let $promoText = $form.find('#promotionPointValue')

      let promoPercent = $('#inputPoint').find('option:selected').val()
      let regPercent = 100 - promoPercent
      let $package = $form.find('[name=package_id] option:selected').data('value')
      $regText.text((regPercent / 100 * $package).toFixed(2))
      $promoText.text((promoPercent / 100 * $package).toFixed(2))

      $form.find('#inputPoint').on('change', function () {
        let promoPercent = $(this).find('option:selected').val()
        let regPercent = 100 - promoPercent
        let $package = $form.find('[name=package_id] option:selected').data('value')
        $regText.text((regPercent / 100 * $package).toFixed(2))
        $promoText.text((promoPercent / 100 * $package).toFixed(2))
      })

      $form.find('[name=package_id]').on('change', function () {
        let promoPercent = $('#inputPoint').find('option:selected').val()
        let regPercent = 100 - promoPercent
        let $package = $(this).find('option:selected').data('value')
        $regText.text((regPercent / 100 * $package).toFixed(2))
        $promoText.text((promoPercent / 100 * $package).toFixed(2))
      })

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
}
