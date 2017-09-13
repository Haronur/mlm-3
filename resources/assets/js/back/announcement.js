export class Announcement {
  constructor () {
    if ($('#createAnnouncementForm').length) {
      this.create()
    }

    if ($('#editAnnouncementForm').length) {
      this.edit()
    }
  }
  create () {
    var $form = $('#createAnnouncementForm')
    var editorEN = $('#editorEN').summernote({
      height: 300,
      callbacks: {
        onImageUpload: function (files) {
          if (files[0].size > 2000000) {
            noty({ // eslint-disable-line no-undef
              text: 'File smaller than 2Mb.',
              type: 'error'
            })
          } else if (
            files[0].type !== 'image/jpeg' &&
            files[0].type !== 'image/png'
          ) {
            noty({ // eslint-disable-line no-undef
              text: 'File must be jpg or png.',
              type: 'error'
            })
          } else {
            let data = new FormData() // eslint-disable-line no-undef
            data.append('imageFile', files[0])
            $.ajax({
              data: data,
              type: 'post',
              url: $form.data('upload'),
              cache: false,
              contentType: false,
              processData: false,
              success: function (res) {
                if (res.type === 'success') {
                  editorEN.summernote('insertImage', res.url)
                } else {
                  noty({ // eslint-disable-line no-undef
                    text: res.message,
                    type: res.type
                  })
                }
              }
            })
          }
        }
      }
    })

    var editorCHS = $('#editorCHS').summernote({
      height: 300,
      callbacks: {
        onImageUpload: function (files) {
          if (files[0].size > 2000000) {
            noty({ // eslint-disable-line no-undef
              text: 'File smaller than 2Mb.',
              type: 'error'
            })
          } else if (
            files[0].type !== 'image/jpeg' &&
            files[0].type !== 'image/png'
          ) {
            noty({ // eslint-disable-line no-undef
              text: 'File must be jpg or png.',
              type: 'error'
            })
          } else {
            let data = new FormData() // eslint-disable-line no-undef
            data.append('imageFile', files[0])
            $.ajax({
              data: data,
              type: 'post',
              url: $form.data('upload'),
              cache: false,
              contentType: false,
              processData: false,
              success: function (res) {
                if (res.type === 'success') {
                  editorCHS.summernote('insertImage', res.url)
                } else {
                  noty({ // eslint-disable-line no-undef
                    text: res.message,
                    type: res.type
                  })
                }
              }
            })
          }
        }
      }
    })

    var editorCHT = $('#editorCHT').summernote({
      height: 300,
      callbacks: {
        onImageUpload: function (files) {
          if (files[0].size > 2000000) {
            noty({ // eslint-disable-line no-undef
              text: 'File smaller than 2Mb.',
              type: 'error'
            })
          } else if (
            files[0].type !== 'image/jpeg' &&
            files[0].type !== 'image/png'
          ) {
            noty({ // eslint-disable-line no-undef
              text: 'File must be jpg or png.',
              type: 'error'
            })
          } else {
            let data = new FormData() // eslint-disable-line no-undef
            data.append('imageFile', files[0])
            $.ajax({
              data: data,
              type: 'post',
              url: $form.data('upload'),
              cache: false,
              contentType: false,
              processData: false,
              success: function (res) {
                if (res.type === 'success') {
                  editorCHT.summernote('insertImage', res.url)
                } else {
                  noty({ // eslint-disable-line no-undef
                    text: res.message,
                    type: res.type
                  })
                }
              }
            })
          }
        }
      }
    })

    var formProcessing = false
    $form.on('click', '[type=submit]', function (e) {
      var $this = $(this)
      e.preventDefault()
      if (formProcessing) {
        noty({ // eslint-disable-line no-undef
          text: 'A form process is still running.',
          type: 'information'
        })
        return false
      }

      if (!$form.parsley().validate()) {
        noty({ // eslint-disable-line no-undef
          text: 'Invalid value on form. Check again.',
          type: 'warning'
        })
        return false
      }

      if (confirm('Submit?')) { // eslint-disable-line no-undef
        formProcessing = true
        var $input = $form.find(':input')
        $input.prop('readonly', true)
        $this.disable(true)

        $.post($form.data('url'), {
          'data': $form.serializeForm()
        }).done(function (e) {
          formProcessing = false
          $input.prop('readonly', false)
          $this.disable(false)
          noty({
            text: e.message,
            type: e.type
          })
        }).fail(function (xhr, status, e) {
          formProcessing = false
          $input.prop('readonly', false)
          $this.disable(false)
          noty({
            text: xhr.responseText,
            type: 'error'
          })
        })
      }
    })
  }
  edit () {
    var $form = $('#editAnnouncementForm')
    var editorEN = $('#editorEN').summernote({
      height: 300,
      callbacks: {
        onImageUpload: function (files) {
          if (files[0].size > 2000000) {
            noty({ // eslint-disable-line no-undef
              text: 'File smaller than 2Mb.',
              type: 'error'
            })
          } else if (
            files[0].type !== 'image/jpeg' &&
            files[0].type !== 'image/png'
          ) {
            noty({ // eslint-disable-line no-undef
              text: 'File must be jpg or png.',
              type: 'error'
            })
          } else {
            let data = new FormData() // eslint-disable-line no-undef
            data.append('imageFile', files[0])
            $.ajax({
              data: data,
              type: 'post',
              url: $form.data('upload'),
              cache: false,
              contentType: false,
              processData: false,
              success: function (res) {
                if (res.type === 'success') {
                  editorEN.summernote('insertImage', res.url)
                } else {
                  noty({ // eslint-disable-line no-undef
                    text: res.message,
                    type: res.type
                  })
                }
              }
            })
          }
        }
      }
    })

    var editorCHS = $('#editorCHS').summernote({
      height: 300,
      callbacks: {
        onImageUpload: function (files) {
          if (files[0].size > 2000000) {
            noty({ // eslint-disable-line no-undef
              text: 'File smaller than 2Mb.',
              type: 'error'
            })
          } else if (
            files[0].type !== 'image/jpeg' &&
            files[0].type !== 'image/png'
          ) {
            noty({ // eslint-disable-line no-undef
              text: 'File must be jpg or png.',
              type: 'error'
            })
          } else {
            let data = new FormData() // eslint-disable-line no-undef
            data.append('imageFile', files[0])
            $.ajax({
              data: data,
              type: 'post',
              url: $form.data('upload'),
              cache: false,
              contentType: false,
              processData: false,
              success: function (res) {
                if (res.type === 'success') {
                  editorCHS.summernote('insertImage', res.url)
                } else {
                  noty({ // eslint-disable-line no-undef
                    text: res.message,
                    type: res.type
                  })
                }
              }
            })
          }
        }
      }
    })

    var editorCHT = $('#editorCHT').summernote({
      height: 300,
      callbacks: {
        onImageUpload: function (files) {
          if (files[0].size > 2000000) {
            noty({ // eslint-disable-line no-undef
              text: 'File smaller than 2Mb.',
              type: 'error'
            })
          } else if (
            files[0].type !== 'image/jpeg' &&
            files[0].type !== 'image/png'
          ) {
            noty({ // eslint-disable-line no-undef
              text: 'File must be jpg or png.',
              type: 'error'
            })
          } else {
            let data = new FormData() // eslint-disable-line no-undef
            data.append('imageFile', files[0])
            $.ajax({
              data: data,
              type: 'post',
              url: $form.data('upload'),
              cache: false,
              contentType: false,
              processData: false,
              success: function (res) {
                if (res.type === 'success') {
                  editorCHT.summernote('insertImage', res.url)
                } else {
                  noty({ // eslint-disable-line no-undef
                    text: res.message,
                    type: res.type
                  })
                }
              }
            })
          }
        }
      }
    })

    var formProcessing = false
    $form.on('click', '[type=submit]', function (e) {
      var $this = $(this)
      e.preventDefault()
      if (formProcessing) {
        noty({ // eslint-disable-line no-undef
          text: 'A form process is still running.',
          type: 'information'
        })
        return false
      }

      if (!$form.parsley().validate()) {
        noty({ // eslint-disable-line no-undef
          text: 'Invalid value on form. Check again.',
          type: 'warning'
        })
        return false
      }

      if (confirm('Submit?')) { // eslint-disable-line no-undef
        formProcessing = true
        var $input = $form.find(':input')
        $input.prop('readonly', true)
        $this.disable(true)

        $.post($form.data('url'), {
          'data': $form.serializeForm()
        }).done(function (e) {
          formProcessing = false
          $input.prop('readonly', false)
          $this.disable(false)
          noty({
            text: e.message,
            type: e.type
          })
        }).fail(function (xhr, status, e) {
          formProcessing = false
          $input.prop('readonly', false)
          $this.disable(false)
          noty({
            text: xhr.responseText,
            type: 'error'
          })
        })
      }
    })
  }
}
