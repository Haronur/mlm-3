/* eslint-disable no-new */

import { Core } from './core'
import { Widget } from './widget'
import { DataTable } from './datatable'
import { Announcement } from './announcement'
import { Package } from './package'
import { Register } from './register'
import { Shares } from './shares'
import { Withdraw } from './withdraw'

new Core()
new Widget()
new DataTable()
new Announcement()
new Package()
new Register()
new Shares()
new Withdraw()

setTimeout(function() {
  $('#loading').fadeOut(400, 'linear')
}, 300)

$(window).on('resize', function() {
  bodySizer()
})

bodySizer()
pageTransitions()
$.slidebars()

$("div[id='#fixed-sidebar']").on('click', function() {

  if ($(this).hasClass("switch-on")) {

    var windowHeight = $(window).height()
    var headerHeight = $('#page-header').height()
    var contentHeight = windowHeight - headerHeight

    $('#page-sidebar').css('height', contentHeight)
    $('.scroll-sidebar').css('height', contentHeight)

    $('.scroll-sidebar').slimscroll({
      height: '100%',
      color: 'rgba(155, 164, 169, 0.68)',
      size: '6px'
    })

    var headerBg = $('#page-header').attr('class')
    $('#header-logo').addClass(headerBg)

  } else {

    var windowHeight = $(document).height()
    var headerHeight = $('#page-header').height()
    var contentHeight = windowHeight - headerHeight

    $('#page-sidebar').css('height', contentHeight)
    $('.scroll-sidebar').css('height', contentHeight)

    $(".scroll-sidebar").slimScroll({
      destroy: true
    })

    $('#header-logo').removeClass('bg-gradient-9')

  }
})

$('.dropdown').on('show.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown()
})

$('.dropdown').on('hide.bs.dropdown', function () {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp()
})

$(function() {
  $('#sidebar-menu').superclick({
    animation: {
      height: 'show'
    },
    animationOut: {
      height: 'hide'
    }
  })
  var path = window.location.pathname.split('/')
  path = path[path.length-1]
  if (path !== undefined) {
    $("#sidebar-menu").find("a[href$='" + path + "']").addClass('sfActive')
    $("#sidebar-menu").find("a[href$='" + path + "']").parents().eq(3).superclick('show')
  }

  $('#close-sidebar').click(function() {
    $('body').toggleClass('closed-sidebar')
    $('.glyph-icon', this).toggleClass('icon-angle-right').toggleClass('icon-angle-left')
  })
})

function bodySizer() {
  var windowHeight, headerHeight, contentHeight

  if ($('body').hasClass('fixed-sidebar')) {

    windowHeight = $(window).height()
    headerHeight = $('#page-header').height()
    contentHeight = windowHeight - headerHeight
    $('#page-sidebar').css('height', contentHeight)
    $('.scroll-sidebar').css('height', contentHeight)
    $('#page-content').css('min-height', contentHeight)

  } else {

    windowHeight = $(document).height()
    headerHeight = $('#page-header').height()
    contentHeight = windowHeight - headerHeight
    $('#page-sidebar').css('height', contentHeight)
    $('.scroll-sidebar').css('height', contentHeight)
    $('#page-content').css('min-height', contentHeight)

  }
}

function pageTransitions() {
  var transitions = ['.pt-page-moveFromLeft', 'pt-page-moveFromRight', 'pt-page-moveFromTop', 'pt-page-moveFromBottom', 'pt-page-fade', 'pt-page-moveFromLeftFade', 'pt-page-moveFromRightFade', 'pt-page-moveFromTopFade', 'pt-page-moveFromBottomFade', 'pt-page-scaleUp', 'pt-page-scaleUpCenter', 'pt-page-flipInLeft', 'pt-page-flipInRight', 'pt-page-flipInBottom', 'pt-page-flipInTop', 'pt-page-rotatePullRight', 'pt-page-rotatePullLeft', 'pt-page-rotatePullTop', 'pt-page-rotatePullBottom', 'pt-page-rotateUnfoldLeft', 'pt-page-rotateUnfoldRight', 'pt-page-rotateUnfoldTop', 'pt-page-rotateUnfoldBottom']
  for (var i in transitions) {
    var transition_name = transitions[i]
    if ($('.add-transition').hasClass(transition_name)) {
      $('.add-transition').addClass(transition_name + '-init page-transition')
      setTimeout(function() {
        $('.add-transition').removeClass(transition_name + ' ' + transition_name + '-init page-transition')
      }, 1200)
      return
    }
  }
}

$('.btn-cron').on('click', function () {
  if (confirm('Run command? Cannot be undo')) {
    var $this = $(this)
    $this.disable(true)
    $.post($this.data('url')).done(function (e) {
      $this.disable(false)
      noty({
        type: e.type,
        text: e.message
      })
    })
  }
})

if ($('#bonusStatementForm').length) {
  var $form = $('#bonusStatementForm')
  var $cash = $form.find('[name="cash"]')
  var $promotion = $form.find('[name="promotion"]')
  var $total = $form.find('[name="total"]')
  $cash.on('input', function () {
    $total.val(parseFloat($(this).val()) + parseFloat($promotion.val()))
  })

  $promotion.on('input', function () {
    $total.val(parseFloat($(this).val()) + parseFloat($cash.val()))
  })
}

if ($('#btnMaintenance').length) {
  var $mt = $('#btnMaintenance')
  $mt.on('click', function (e) {
    e.preventDefault()
    if (confirm('Toggle Maintenance?')) {
      $mt.disable(false)
      $.post($mt.data('url')).done(function (e) {
        noty({
          text: e.message,
          type: e.type
        })
      })
    }
  })
}

if ($('.dd-icon').length) {
  $('.dd-icon').each(function() {
    $(this).ddslick({
      width: '100%',
      defaultSelectedIndex: $(this).prop('selectedIndex')
    })
  })
}

