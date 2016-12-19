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
                    ||  skel.vars.mobile)
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



                
    });

    

    // $(".nav a").on("click", function(){
    //     e.preventDefault();

    //      var target = this.hash,
    //          $target = $(target);

    //      $('html, body').stop().animate({
    //          'scrollTop': $target.offset().top - 15
    //      }, 1000, 'swing', function () {
    //          window.location.hash = target;
    //      });
    //     $(".nav").find(".active").removeClass("active");
    //     $(this).parent().addClass("active");

    // });

    $(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);
         var parent = $(this).parent();

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 15
         }, 1000, 'swing', function () {
             window.location.hash = target;
             console.log(this);
            $(".nav").find(".active").removeClass("active");
            $(parent).addClass("active");
         },1000);
         
     });
 });

})(jQuery);

function sendEmail() {
            $("#form :input").prop('readonly', true);
            _gaq.push(['_trackEvent', 'Email', 'Send', 'Initiate']);
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
                   _gaq.push(['_trackEvent', 'Email', 'Send', 'Sent']);
                   document.getElementById("submit").value = "Thank you!";
                   document.getElementById("submit").disabled = true;
                   return false;
                 });
                }