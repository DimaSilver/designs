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
    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });
    $('.portfolio__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow : '<button type="button" class="portfolio__slider-arrows portfolio__slider-prev"><img src="images/portfolio__slider-arrow__left.png" alt=""></button>',
        nextArrow : '<button type="button" class="portfolio__slider-arrows portfolio__slider-next"><img src="images/portfolio__slider-arrow__right.png" alt=""></button>'
    });
});