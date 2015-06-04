/*
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

				}

		// Main Sections: Two.

			// Lightbox gallery.
				$window.on('load', function() {

					$('.popup').poptrox({
						//caption: function($a) { return $a.next('h3').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						//usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});

				$('#submit').click(function() {
								$("#form").fadeOut(2000);
								$.ajax({
									  type: "POST",
									  url: "https://mandrillapp.com/api/1.0/messages/send.json",
									  data: {
									    'key': 'XQHuWc3kZCLY2l6khUpDAg',
									    'message': {
									      'from_email': document.getElementById("email").value,
									      'to': [
									          {
									            'email': 'bhatt.amar.a@gmail.com',
									            'name': 'amarbhatt.com',
									            'type': 'to'
									          }],
									      'autotext': 'true',
									      'subject': document.getElementById("name").value + "- amarbhatt.com",
									      'html': document.getElementById("message").value
									    }
									  }
									 }).done(function(response) {
									   console.log(response); // if you're into that sorta thing
									   
									   $("#contact-hide").delay(2000).html("<h2 style='font-size: 70px;text-align: center;''>Thank you!</h2>");
									 });
									});

				
	});

	$(document).ready(function(){
    	
		var $window = $(window);
    	var $pane = $('#pane1');
	
    	function checkWidth() {
    	    var windowsize = $window.width();
    	    if (windowsize > 980) {
    	        $("html,body").scrollTop(140);
    	    }
    	}
    	// Execute on load
    	checkWidth();
    	// Bind event listener
    	$(window).resize(checkWidth);    	
	});

	$(".nav a").on("click", function(){
   		$(".nav").find(".active").removeClass("active");
   		$(this).parent().addClass("active");
	});

})(jQuery);