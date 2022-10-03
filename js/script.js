var scroll = function () {
  var $cnt = null,
    moveCnt = null,
    moveIndex = 0,
    moveCntTop = 0,
    winH = 0,
    time = false; // 새로 만든 변수

  $(document).ready(function () {
    init();
    initEvent();
  });

  var init = function () {
    $cnt = $(".content");
  };

  var initEvent = function () {
    $("html ,body").scrollTop(0);
    winResize();
    $(window).resize(function () {
      winResize();
    });
    $cnt.on("mousewheel", function (e) {
      if (time === false) { // time 변수가 펄스일때만 휠 이벤트 실행
        wheel(e);
      }
    });
  };

  var winResize = function () {
    winH = $(window).height();
    $cnt.children("div").height(winH);
    $("html ,body").scrollTop(moveIndex.scrollTop);
  };

  var wheel = function (e) {
    if (e.originalEvent.wheelDelta < 0) {
      if (moveIndex < 6) {
        moveIndex += 1;
        moving(moveIndex);
      };
    } else {
      if (moveIndex > 0) {
        moveIndex -= 1;
        moving(moveIndex);
      };
    };
  };

  var moving = function (index) {
    time = true // 휠 이벤트가 실행 동시에 true로 변경
    moveCnt = $cnt.children("div").eq(index);
    moveCntTop = moveCnt.offset().top;
    $("html ,body").stop().animate({
      scrollTop: moveCntTop
    }, 1000, function () {
      time = false; // 휠 이벤트가 끝나면 false로 변경
    });
  };
};

scroll();

$(function () {
  $('#toggle').click(function () {
    $('#toggle .bar').toggleClass('animate');
    $('#menu-page').toggleClass('overlay');
  });
});

$(function () {
  /* 메뉴 관련 부분 */
  var menu_on = $('#menu-wrap #menu li');
  var contents = $('#contents > div');
  var btn = $('#floatdiv ul li');
  menu_on.click(function (e) {
    e.preventDefault();
    var ht = $(window).height();
    var i = $(this).index();
    var section = contents.eq(i);
    var nowTop = i * ht;
    $('html, body').stop().animate({ scrollTop: nowTop }, 1500);
    $('#menu li').removeClass('on')
    $('#menu li').eq(i).addClass('on')
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
});

