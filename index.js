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


new Swiper('.equipment-slider', {
    navigation: {
        nextEl: '.equipment__arrow._left',
        prevEl: '.equipment__arrow._right',
    },
    slidesPerView: slidesCount,
    slidesPerGroup: slidesCount,
    spaceBetween: 20,
    pagination: {
        el: '.equipment__pagination',
        clickable: true,
    }
});