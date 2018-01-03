/*=======================================================
-                    NAVIGATION
=======================================================*/
$(function () {
    // show/hide navbar on scroll
    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            // show
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

$(function () {
    // smooth scroll
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // get & return section id: #home, #about and etc.
        var section = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

$(function () {
    // close menu on click
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});
/*=======================================================
-                   SERVICES SECTION
=======================================================*/
$(function () {
    // trigger animation on scroll
    new WOW().init();
});

/*=======================================================
-                   WORK SECTION
=======================================================*/
$(function () {
    // magnific-popup image modal
    $("#work").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

/*=======================================================
-                   TEAM SECTION
=======================================================*/
$(function () {
    // image carousel
    $("#team-members").owlCarousel({
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items:3
            }
        }
    });
});

/*=======================================================
-                 TESTIMONIALS SECTION
=======================================================*/
$(function () {
    // image carousel
    $("#customers-testimonials").owlCarousel({
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
});

/*=======================================================
-                     STATS SECTION
=======================================================*/
$(function () {
    // counter activation
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
});

/*=======================================================
-                   CLIENTS SECTION
=======================================================*/

$(function () {
    // image carousel
    $("#clients-list").owlCarousel({
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items:5
            },
            992: {
                items: 6
            }
        }
    });
});



