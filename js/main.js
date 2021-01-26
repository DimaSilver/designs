$(function () {
    $('.first__screen-slider').slick( {
        arrows: false,
        dots: true,
        dotsClass: 'first__screen-slider__dots'
    });
    $('.menu__btn').on("click", function () {
       $('.menu__list').toggleClass('menu__list--active');
    });
    $('.menu__list').on("click", ".menu__list-item", function() {
        $(this).addClass('menu__list-item--active').siblings().removeClass('menu__list-item--active');
    });
});