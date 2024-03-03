// ---- СЛАЙДЕР В СЕКЦИИ АКЦИИ -------//
let slidesCount;
if (window.innerWidth > 1149) {
    slidesCount = 3;
} else if (window.innerWidth > 774 && window.innerWidth <= 1149) {
    slidesCount = 2;
} else {
    slidesCount = 1;
}

new Swiper('.promotions-slider', {
    navigation: {
        nextEl: '.promotions__arrow._left',
        prevEl: '.promotions__arrow._right',
    },
    slidesPerView: slidesCount,
    slidesPerGroup: slidesCount,
    spaceBetween: 20,
    pagination: {
        el: '.promotions__pagination',
        clickable: true,
    }
});

new Swiper('.center-slider', {
    navigation: {
        nextEl: '.center-slider__arrow._left',
        prevEl: '.center-slider__arrow._right',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 88,
    centeredSlides: true,
    initialSlide: 1,
})