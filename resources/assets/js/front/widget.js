export class Widget {
	constructor () {
		$('a[href="#"]').click(function(event) {
			event.preventDefault()
		})

		$('[data-toggle="popover"]').popover()
		
		$(".todo-box li input").on('click', function() {
			$(this).parent().toggleClass('todo-done')
		})
		
		var overallWidth = 0
		$('.timeline-scroll .tl-row').each(function(index, elem) {
			var $elem = $(elem)
			overallWidth += $elem.outerWidth() + parseInt($elem.css('margin-left'), 10) + parseInt($elem.css('margin-right'), 10)
		})
		$('.timeline-horizontal', this).width(overallWidth)

		$('.input-switch-alt').simpleCheckbox()

		$('input[type="checkbox"].custom-checkbox').uniform()
		$('input[type="radio"].custom-radio').uniform()
		$('.custom-select').uniform()

		$('.selector').append('<i class="glyph-icon icon-caret-down"></i>')

		$('.checker span').append('<i class="glyph-icon icon-check"></i>')
		$('.radio span').append('<i class="glyph-icon icon-circle"></i>')
		
		$('.scrollable-slim').slimScroll({
			color: '#8da0aa',
			size: '10px',
			alwaysVisible: true
		})
		
		$('.scrollable-slim-sidebar').slimScroll({
			color: '#8da0aa',
			size: '10px',
			height: '100%',
			alwaysVisible: true
		})
		
		$('.scrollable-slim-box').slimScroll({
			color: '#8da0aa',
			size: '6px',
			alwaysVisible: false
		})

		$('.loading-button').click(function() {
			var btn = $(this)
			btn.button('loading')
		})

		$('.tooltip-button').tooltip({
			container: 'body'
		})
		
		$('.alert-close-btn').click(function() {
			$(this).parent().addClass('animated fadeOutDown')
		})
		
		$('.popover-button').popover({
			container: 'body',
			html: true,
			animation: true,
			content: function() {
				var dataID = $(this).attr('data-id')
				return $(dataID).html()
			}
		}).click(function(evt) {
			evt.preventDefault()
		})

		$('.popover-button-default').popover({
			container: 'body',
			html: true,
			animation: true
		}).click(function(evt) {
			evt.preventDefault()
		})

		$('.datepicker').bsdatepicker({
			format: 'yyyy-mm-dd'
		})
		$('.input-switch').bootstrapSwitch()

		if(document.getElementById('fullscreen-btn')) {
			document.getElementById('fullscreen-btn').addEventListener('click', function () {
				if (screenfull.enabled) {
					screenfull.request()
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
	}
}