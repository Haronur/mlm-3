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

if ($('#exchangeRateChart').length) {
  $.when(
    $.getScript(window._root + '/lib/chart-core.js'),
    $.Deferred(function (deferred) {
      $(deferred.resolve)
    })
  ).done(function () {
    var exchageRates = window._exchangeRate
    var labels = []
    var chartDataBuy = []
    var chartDataSell = []

    $.each(exchageRates, function (index, value) {
      labels.push(index + " (" + value.currency + ")")
      chartDataBuy.push(value.buy)
      chartDataSell.push(value.sell)
    })
    var chartData = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Buy',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: chartDataBuy,
          fill: false
        },{
          label: 'Sell',
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgb(54, 162, 235)',
          data: chartDataSell,
          fill: false
        }],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title:{
          display:true,
          text: 'Exchange Rates'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Country'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'BUY/SELL Value'
            }
          }]
        }
      } 
    }
    var ctx = document.getElementById("exchangeRateChart").getContext("2d");
    ctx.height = 500;
    new Chart(ctx, chartData)
  }).fail(function (xhr, status, e) {
    console.log(xhr.responseText)
  })
}
