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

    // nav & mousewheel
    var menu_on = $('.nav-list li');
    var contents = $('.content > div');
    var page = 1;

    menu_on.click(function (e) {
        e.preventDefault();
        var ht = $(window).height();
        var i = $(this).index();
        var nowTop = i * ht;
        menu_on.removeClass('active')
        menu_on.eq(i).addClass('active')
        $('.page').stop().animate({ scrollTop: nowTop }, 800);
        page = i + 1
    });

    $(window).on("wheel", function (e) {
        var ht = $('.section').innerHeight();
        if (e.originalEvent.deltaY > 0 && page < contents.length) {
            page++;
        } else if (e.originalEvent.deltaY < 0 && page > 1) {
            page--;
        }
        menu_on.eq(page - 1).trigger("click");
        var posTop = (page - 1) * ht
        $('.page').animate({ scrollTop: posTop }, 800);
        console.log(page)
    })
})