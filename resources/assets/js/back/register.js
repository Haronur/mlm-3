export class Register {
  constructor () {
    if ($('#registerForm').length) {
      let $form = $('#registerForm')
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
