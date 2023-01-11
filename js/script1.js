console.clear();


$(function () {
    setTimeout(function () {
        $('.header').addClass('on');
        $('.page').delay(500).removeClass('no-scroll');
    }, 6400);

    // document.addEventListener("DOMContentLoaded", function () {
    gsap.utils.toArray(".box.reveal").forEach((box, i) => {
        ScrollTrigger.create({
            trigger: box,
            start: "top top",
            pin: true,
            pinSpacing: false,
            markers: true,
            // snap: true
        });
    });

    gsap.utils.toArray(".panel").forEach((panel, i) => {
        const startPoint = i ? "top bottom" : "top top";
        const endPoint = i ? "top top" : "bottom top";
        var nav = $('.nav-list li')
        ScrollTrigger.create({
            trigger: panel,
            start: startPoint,
            end: endPoint,
            markers: { startColor: "fuchsia", endColor: "cyan", indent: 200 * i },
            id: i,
            snap: true,
            // toggleActions: 'play reverse none reverse',
            // toggleClass: { targets: nav.eq(i), className: "active" },
            // end: "+=100%"
            // onToggle: self => console.log("toggled. active?", self.isActive)
            // toggleClass: { targets: nav.eq(i), className: "active" },
            // onEnter: () => nav.eq(i).addClass("active"),
            // onLeaveBack: () => nav.eq(i).romoveClass("active"),
        });
        // console.log(self)
    });



    gsap.utils.toArray('.nav-list li').forEach((a, i) => {
        scrollTrigger.create({
            trigger: '.panel',
            start: "bottom 50px",
            end: "bottom 50px",
            markers: true,
        })
    })


    //     console.clear()
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.to(navIcon, {
    //   scrollTrigger: {
    //   trigger: banner,
    //   start: "bottom 50px",
    //   end: "bottom 50px",
    //     toggleClass: {targets: navIcon, className: "is-triggered"},
    //     onEnter: () => navIcon.classList.add("is-triggered"),
    //     onLeaveBack: () => navIcon.classList.remove("is-triggered"),
    //   toggleActions: "play none reverse none",
    //     markers: true,
    // },
    //   // backgroundColor: "black",
    //   // color: "white"
    // });
})

