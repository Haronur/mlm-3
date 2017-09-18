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
    }
  }
}
