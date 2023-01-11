
$(function () {
    setTimeout(function () {
        $('.header').addClass('on');
        $('.page').delay(500).removeClass('no-scroll');
    }, 6400);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    //section scroll
    gsap.utils.toArray(".panel").forEach((panel, i) => {
        const startPoint = i ? "top bottom" : "top top";
        const endPoint = i ? "top top" : "bottom top";

        ScrollTrigger.create({
            trigger: panel,
            start: startPoint,
            end: endPoint,
            markers: { startColor: "fuchsia", endColor: "cyan", indent: 200 * i },
            id: i,
            snap: true,
        });
    });

    //box in section pin
    gsap.utils.toArray(".box.reveal").forEach((box, i) => {
        ScrollTrigger.create({
            trigger: box,
            start: "top top",
            pin: true,
            pinSpacing: false,
            markers: true
        });
    });

    //nav active
    var panel = document.querySelectorAll('.panel')
    gsap.utils.toArray('.nav-list li').forEach((a, i) => {
        ScrollTrigger.create({
            trigger: panel[i],
            start: 'top 50px',
            end: 'bottom 50px',
            marker: true,
            markers: { startColor: "yellow", endColor: "yellow" },
            toggleClass: { targets: a, className: "active" },
            onEnter: () => a.classList.add("active"),
            onLeaveBack: () => a.classList.remove("active")
        })
    })

    //nav click
    const navLinks = gsap.utils.toArray(".nav-list .item");
    navLinks.forEach((link, i) => {
        link.addEventListener("click", e => {
            e.preventDefault();
            gsap.to($(window), { scrollTo: panel[i].offsetTop });
        });
    });
})

