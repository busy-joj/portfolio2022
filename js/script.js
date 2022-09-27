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
  $('body').on('mousemove', function (e) {
    var posX = e.pageX / 70;
    var posY = e.pageY / 70;

    $('.obj1').css({ 'right': 50 - posX });
    $('.obj2').css({ 'top': -120 + posY });
    $('.obj3').css({ 'right': 150 + posX });

    $('.obj4').css({ 'bottom': -70 - posY });
    $('.obj5').css({ 'left': 0 + posX });

    $('.obj6').css({ 'top': -100 - posY });
    $('.obj7').css({ 'left': 174 - posX });

    $('.obj8').css({ 'bottom': -160 + posY });
    $('.obj9').css({ 'left': 400 + posX });
    $('.obj10').css({ 'top': -155 + posY });
  });

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
  });
});

