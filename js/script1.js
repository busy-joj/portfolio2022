gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

$(function () {
    //로딩시 header
    setTimeout(function () {
        $('.header').addClass('on');
    }, 4500);

    //로딩시 scroll
    setTimeout(function () {
        $('body').removeClass('no-scroll');
    }, 6000);

    // box in section pin
    var $w = $('.panel.horizontal .inner').innerWidth();
    gsap.from(".panel.horizontal .inner", {
        scrollTrigger: {
            trigger: ".panel.horizontal",
            start: "top top",
            end: "94% top",
            scrub: 1,
            pin:true,
            pinSpacing: true,
            toggleActions: "restart pause reverse pause"
        },
        x: -$w,
        duration:10
    });

    //section scroll
    gsap.utils.toArray(".snap").forEach((snap, i) => {
        const startPoint = i ? "top bottom" : "top top";
        const endPoint = i ? "top top" : "bottom top";

        ScrollTrigger.create({
            trigger: snap,
            start: startPoint,
            end: endPoint,
            id: i,
            snap: true,
        });

        console.log(i, startPoint, endPoint)
    });

    //nav active
    var panel = document.querySelectorAll('.panel')
    gsap.utils.toArray('.nav-list li').forEach((a, i) => {
        ScrollTrigger.create({
            trigger: panel[i],
            start: '20px 50px',
            end: 'bottom 50px',
            //markers: { startColor: "fuchsia", endColor: "cyan"},
            toggleClass: { targets: a, className: "active" },
            onEnter: () => a.classList.add("active"),
            onLeaveBack: () => a.classList.remove("active")
        })
    })

    //nav click
    const navLinks = gsap.utils.toArray(".nav-list .item");
    navLinks.forEach((link, i) => {
        var $h = $('.panel').eq(i).height();
        link.addEventListener("click", e => {
            if(link.getAttribute('href') == '#work'){
                gsap.to($(window), { scrollTo: $h*i});
                console.log(link, panel[i].offsetTop, $h ,$h*i, i)
            }else{
                gsap.to($(window), { scrollTo: panel[i].offsetTop});
                console.log(link, panel[i].offsetTop, $h*i, i)
            }
            e.preventDefault();
        });
    });

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})

