"use strict";

$(document).ready(function () {
  $('.popular-slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false
      }
    }, {
      breakpoint: 780,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });

  if (localStorage.getItem('cookieSeen') != 'shown') {
    $('.cookie-banner').delay(10000).fadeIn();
    localStorage.setItem('cookieSee', 'shown');
  }

  ;
  $('.accept').on('click', function () {
    localStorage.setItem('cookieSeen', 'shown');
    $('.cookie-banner').fadeOut();
  });
  $('.close').click(function () {
    $('.cookie-banner').fadeOut();
  });
  $(document).on('click', '#color', function (e) {
    $(this).toggleClass('active_dot');
  });
  $('.slider-images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    mobileFirst: true,
    arrows: false,
    dots: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-images',
    dots: true,
    arrows: false,
    centerMode: false,
    mobileFirst: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true
      }
    }]
  });
  $('.slider-images ').slickLightbox({
    mobileFirst: true,
    itemSelector: 'a',
    navigateByKeyboard: true
  });
  $(document).on('click', '#print', function () {
    print();
  });
});