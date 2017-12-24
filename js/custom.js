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
            600: {
                items: 3
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
$(function() {
    // counter activation
    $('.counter').counterUp ({
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
            600: {
                items: 6
            }
        }
    });
});


