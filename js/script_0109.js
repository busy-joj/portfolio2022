

$(function () {
    setTimeout(function () {
        $('.header').addClass('on');
        $('.page').delay(500).removeClass('no-scroll');
    }, 6400);

    // $('.header').addClass('on');
    // $('.page').delay(500).removeClass('no-scroll');

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 50,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper = new Swiper(".ySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".page .section").forEach((panel, i) => {
        const startPoint = i ? "top bottom" : "top top";
        const endPoint = i ? "top top" : "bottom top";

        ScrollTrigger.create({
            trigger: panel,
            start: startPoint,
            end: endPoint,
            markers: { startColor: "fuchsia", endColor: "cyan", indent: 200 * i },
            id: i,
            snap: true
        });
        console.log(panel, i)
    });



})