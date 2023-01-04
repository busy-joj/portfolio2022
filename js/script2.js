$(function () {
    setTimeout(function () {
        $('.header').addClass('on');
        $('.page').delay(500).removeClass('no-scroll');
    }, 6400);

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 50,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})