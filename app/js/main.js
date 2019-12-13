$(function(){

$('.rate-star').rateYo({
    rating: 4.5,
    starWidth: '12px',
    readOnly: true
});

$('.products-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4
});

$('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: '$'
});

$('.icon-th-list').on('click', function() {
   $('.products__item').addClass('list');
   $(this).addClass('active');
   $('.icon-th-large').removeClass('active');
});

$('.icon-th-large').on('click', function () {
    $('.products__item').removeClass('list');
    $(this).addClass('active');
    $('.icon-th-list').removeClass('active');
});



$('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();

});

$('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');

});



var mixer = mixitup('.products__inner-box');

});