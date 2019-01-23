/*
1. 화살표 이동
2. 인디케이터 이동
3. 자동 작동
4. 인디케이터 및 슬라이드에 마우스오버 시, 슬라이드 멈춤  
*/


var slide_length = 3;
var current_slide = 0;

var BOX = $(".slide--box");
var slide = BOX.find(".slide--elem");
var next_arr = BOX.find(".slide--arr.next");
var prev_arr = BOX.find(".slide--arr.prev");
var indicator = BOX.find(".slide--indicator");

  
var addEvent = function() {
  next_arr.on("click", function() {
    current_up();
    setStyle("next");
  })

  prev_arr.on("click", function() {
    current_down();
    setStyle("prev");
  })

  indicator.on("click", "li", function() {
    var click_slide = $(this).index();

    if (current_slide < click_slide) {
      current_indicator(click_slide);
      setStyle("next")
    } else {
      current_indicator(click_slide);
      setStyle("prev")
    }
  })
  
  BOX.find(".slide--wrap").hover(function() {
    stop_rolling();
  }, function() {
    start_rolling()
  })
}

var current_up = function() {
  if (current_slide < slide_length - 1) current_slide += 1;
  else current_slide = 0;
}

var current_down = function() {
  if (current_slide == 0) current_slide = slide_length - 1;
  else current_slide -= 1;
}

var current_indicator = function(idx) {
  current_slide = idx;
}

var setStyle = function(direction) {
  var prev_slide = (current_slide == 0) ? slide_length - 1 : current_slide - 1;
  var next_slide = (current_slide == slide_length - 1) ? 0 : current_slide + 1;

  if (direction === "next") var move = "prev";
  else var move = "next";

  slide
    .removeClass("current")
    .removeClass("prev")
    .removeClass("next")
    .removeClass("move");
  
  slide.eq(current_slide).addClass("current");
  
  slide.eq(prev_slide).addClass("prev");
  slide.eq(next_slide).addClass("next");

  BOX.find(".slide--elem."+move).addClass("move");
}

var interval_rolling;
var start_rolling = function() {
  interval_rolling = setInterval(function() {
    BOX.find(".slide--arr.next").trigger("click");
  }, 3000)
};

var stop_rolling = function() {
  clearInterval(interval_rolling)
}

addEvent();
setStyle();
start_rolling();