/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	const $window = $(window);
	const $body = $('body');

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	if (browser.mobile) $body.addClass('is-mobile');

	$('.scrolly').scrolly({ speed: 1500 });

})(jQuery);