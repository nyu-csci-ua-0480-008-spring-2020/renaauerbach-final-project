(function($) {
	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
	});

	$(function() {
		let $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded
		$body.addClass('is-loading');

		$window.on('load', () => {
			window.setTimeout(() => {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Fix: Placeholder polyfill
		$('form').placeholder();

		// Prioritize "important" elements on medium
		skel.on('+medium -medium', () => {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Menu
		$('#menu')
			.append('<a href="#menu" target="_blank" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
			});

		// Header
		if (skel.vars.IEVersion < 9) $header.removeClass('alt');

		if ($banner.length > 0 && $header.hasClass('alt')) {
			$window.on('resize', () => {
				$window.trigger('scroll');
			});

			$banner.scrollex({
				bottom: $header.outerHeight(),
				terminate: () => {
					$header.removeClass('alt');
				},
				enter: () => {
					$header.addClass('alt');
				},
				leave: () => {
					$header.removeClass('alt');
					$header.addClass('reveal');
				},
			});
		}

		// Banner
		if ($banner.length > 0) {
			// IE fix
			if (skel.vars.IEVersion < 12) {
				$window.on('resize', () => {
					let wh = $window.height() * 0.6,
						bh = $banner.height();

					$banner.css('height', 'auto');

					window.setTimeout(() => {
						if (bh < wh) $banner.css('height', wh + 'px');
					}, 0);
				});

				$window.on('load', () => {
					$window.triggerHandler('resize');
				});
			}
		}

		// Scrolly
		$('.scrolly').scrolly({
			offset: () => {
				return $header.height() - 2;
			},
		});
	});
})(jQuery);