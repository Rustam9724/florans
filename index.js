new Swiper('.promotions-slider', {
    navigation: {
        nextEl: '.promotions__arrow._left',
        prevEl: '.promotions__arrow._right',
    },
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    pagination: {
        el: '.promotions__pagination',
        clickable: true,
    }
});