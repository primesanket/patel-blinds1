(function($) {
    'use strict';
    jQuery('.mean-menu').meanmenu({ 
        meanScreenWidth: "991"
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >150){  
            $('.navbar-area').addClass("sticky-nav");
        }
        else{
            $('.navbar-area').removeClass("sticky-nav");
        }
    });
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        dots: false,
        thumbs: true,
		thumbsPrerendered: true,
        autoplay: true,
        autoplayHoverPause: true,
    })
    $('.home-slider-two').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        dotsData: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })
    $('.apartment-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        dotsData: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })
    $('.innovation-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
    })
    $('.gallery-view').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] 
        }
    });
    $('body').append('<div id="toTop" class="top-btn"><i class="bx bx-up-arrow"></i></div>');
    $(window).on('scroll',function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    jQuery(window).on('load',function(){
        jQuery(".preloader").fadeOut(500);
    });
})(jQuery);