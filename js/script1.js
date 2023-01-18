
$(function () {
    setTimeout(function () {
        $('.header').addClass('on');
        $('body').delay(500).removeClass('no-scroll');
    }, 6400);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // box in section pin
    var $w = $('.panel.blue .inner').width();
    gsap.from(".panel.blue .inner", {
        scrollTrigger: {
            trigger: ".panel.blue",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin:true,
            toggleActions: "restart pause reverse pause",
            markers: true
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
    });

    //nav active
    var panel = document.querySelectorAll('.panel')
    gsap.utils.toArray('.nav-list li').forEach((a, i) => {
        ScrollTrigger.create({
            trigger: panel[i],
            start: 'top 50px',
            end: 'bottom 50px',
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
            e.preventDefault();
            gsap.to($(window), { scrollTo: panel[i].offsetTop});
            console.log(link, panel[i].offsetTop, $h*i, i)
        });
    });
})

