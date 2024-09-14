(function ($) {
   "use strict";
   $('#navbar li').on("mouseenter", function () {
      $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
   });
   $('#navbar li').on("mouseleave", function () {
      $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
   });
   if ($(window).width() > 992) {
      $(".navbar-arrow ul ul > li").has("ul").children("a").append(" <i class='arrow-indicator fa fa-angle-right'></i>");
   };
  
   // $(window).scroll(function () {
   //    if ($(window).scrollTop() > 10) {
   //       $('.navigation').addClass('navbar-sticky')
   //    } else {
   //       $('.navigation').removeClass('navbar-sticky')
   //    }
   // });
   // $(window).scroll(function () {
   //    if ($(window).scrollTop() > 10) {
   //       $('.tabs-navbar').addClass('navbar-sticky')
   //    } else {
   //       $('.tabs-navbar').removeClass('navbar-sticky')
   //    }
   // });
 

 
 
   $('.banner-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      speed: 3000,
      dots: false,
      responsive: [{
         breakpoint: 1100,
         settings: {
            slidesToShow: 2
         }
      }, {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
            arrows: false
         }
      }]
   });
   $('.partners-slider').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      dots: false,
      responsive: [{
         breakpoint: 1000,
         settings: {
            slidesToShow: 4
         }
      }, {
         breakpoint: 600,
         settings: {
            slidesToShow: 2
         }
      }]
   });

 
   $('.sidebar-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      dots: false,
   });

   $('.sidebar-sticky').stickit({
      screenMinWidth: 992,
      top: 60,
      zIndex: 9995,
      className: 'when-sticky-on',
      overflowScrolling: true,
      extraHeight: 0
   });
   $('.sidebar-sticky.sidebar-sticky-extra-height').stickit({
      screenMinWidth: 992,
      top: 60,
      zIndex: 9995,
      className: 'when-sticky-on',
      overflowScrolling: true,
      extraHeight: 100
   });
   $('#sidebar-sticky').stickit({
      screenMinWidth: 992,
      top: 80,
      zIndex: 9995,
      className: 'when-sticky-on-id',
      overflowScrolling: true,
      extraHeight: 100,
   });
   $(document).on('click', '#back-to-top, .back-to-top', function () {
      $('html, body').animate({
         scrollTop: 0
      }, '500');
      return false;
   });
   $(window).on('scroll', function () {
      if ($(window).scrollTop() > 500) {
         $("#back-to-top").fadeIn(200);
      } else {
         $("#back-to-top").fadeOut(200);
      }
   });
   $(document).on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
   });
}(jQuery));
jQuery(window).on('resize load', function () {
   resize_eb_slider();
}).resize();

function resize_eb_slider() {
   var bodyheight = jQuery(this).height();
   if (jQuery(window).width() > 1400) {
      bodyheight = bodyheight * 0.75;
      jQuery(".slider").css('height', bodyheight + 'px');
      jQuery(".banner-style-1 #js_frm_040").css('max-height', bodyheight * 1.25 + 'px');
      jQuery('#home_banner_video').css('height', bodyheight * 1.20 + 'px');
   }
}