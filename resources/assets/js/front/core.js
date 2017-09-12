export class Core {
  constructor () {
    this.disable()
    this.notyDefault()
    this.serializeForm()
    this.setupAjax()
    this.setupForm()
  }
  disable () {
    $.fn.extend({
      disable: function (state) {
        return this.each(function () {
          if (state) {
            $(this).find('span').hide()
            $(this).attr('disabled', 'disabled').find('.btn-preloader').show()
          } else {
            $(this).find('span').show()
            $(this).removeAttr('disabled').find('.btn-preloader').hide()
          }
        })
      }
    })
  }
  notyDefault () {
    $.noty.defaults = {
      layout: 'top',
      theme: 'relax',
      type: 'alert',
      text: '',
      dismissQueue: true,
      force: false,
      maxVisible: 5,
      template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
      timeout: 5000,
      animation: {
        open: 'animated fadeInDown',
        close: 'animated fadeOutUp',
        easing: 'swing',
        speed: 500
      },
      closeWith: ['click'],
      modal: false,
      killer: false,
      callback: {
        onShow: function () {},
        afterShow: function () {},
        onClose: function () {},
        afterClose: function () {},
        onCloseClick: function () {}
      },
      buttons: false
    }
  }
  serializeForm () {
    $.fn.serializeForm = function () {
      var data, lookup, parse, selector
      data = void 0
      lookup = void 0
      parse = void 0
      selector = void 0
      if (this.length < 1) {
        return false
      }
      data = {}
      lookup = data
      selector = ':input[type!="checkbox"][type!="radio"], input:checked'
      parse = function () {
        var $el, cap, i, named
        $el = void 0
        cap = void 0
        i = void 0
        named = void 0
        if (this.disabled) {
          return
        }
        named = this.name.replace(/\[([^\]]+)?\]/g, ',$1').split(',') // eslint-disable-line no-useless-escape
        cap = named.length - 1
        $el = $(this)
        if (named[0]) {
          i = 0
          while (i < cap) {
            lookup = lookup[named[i]] = lookup[named[i]] || (named[i + 1] === '' || named[i + 1] === '0' ? [] : {})
            i++
          }
          if (lookup.length !== void 0) {
            lookup.push($el.val())
          } else {
            lookup[named[cap]] = $el.val()
          }
          lookup = data
        }
      }
      this.filter(selector).each(parse)
      this.find(selector).each(parse)
      return data
    }
  }
  setupAjax () {
    $.ajaxSetup({
      statusCode: {
        403: function (e) {
          noty({ // eslint-disable-line no-undef
            text: 'Forbidden Content.',
            type: 'warning'
          })
          return false
        },
        404: function (e) {
          noty({ // eslint-disable-line no-undef
            text: 'Route not found.',
            type: 'warning'
          })
          return false
        },
        500: function (e) {
          noty({ // eslint-disable-line no-undef
            text: 'Internal server error.',
            type: 'error'
          })
          return false
        }
      },
      crossDomain: false,
      dataType: 'json',
      cache: true,
      headers: {
        'X-CSRF-Token': $('meta[name="_t"]').attr('content')
      }
    })
  }
  setupForm () {
    var $forms = $('.action-form')
    var formProcessing = false
    var allowedTypes = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

    $forms.each(function (e) {
      var $form = $(this)
      $form.on('click', '[type=submit]', function (e) {
        e.preventDefault()
        var $this = $(this)

        if (formProcessing) {
          noty({ // eslint-disable-line no-undef
            text: 'A form process is still running.',
            type: 'information'
          })
          return false
        }

        var httpType = ($form.attr('http-type')).toUpperCase()
        if (allowedTypes.indexOf(httpType) === -1) {
          noty({ // eslint-disable-line no-undef
            text: 'HTTP type not allowed.',
            type: 'warning'
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

          let formData = {}
          formData.data = $form.serializeForm()

          $.each($form.data(), function (i, v) {
            if (i === 'nationality') {
              if ($('#inputNationality').length) {
                let value = $('#inputNationality').data('ddslick')
                formData.data.nationality = value.selectedData.value
              }

              if ($('#inputBeneficiaryNationality').length) {
                let value = $('#inputBeneficiaryNationality').data('ddslick')
                formData.data.beneficiary_nationality = value.selectedData.value
              }
            }
          })

          $.ajax({
            type: httpType,
            data: formData,
            url: $form.data('url'),
            success: function (e) {
              noty({ // eslint-disable-line no-undef
                text: e.message,
                type: e.type
              })
              formProcessing = false
              $input.prop('readonly', false)
              $this.disable(false)

              if (e.type === 'success' && e.redirect !== undefined) {
                window.location.replace(e.redirect)
              }
            },
            error: function (xhr, status, e) {
              noty({ // eslint-disable-line no-undef
                text: xhr.responseText,
                type: 'error'
              })
              formProcessing = false
              $input.prop('readonly', false)
              $this.disable(false)
            }
          })
        }
      })
    })
  }
}
