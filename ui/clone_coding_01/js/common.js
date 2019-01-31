var headerEvent = (function() {
  $("header nav .dep01 li").on("mouseenter", function() {
    $("header nav .dep02_wrap").slideDown(250);
  });

  $("header nav").on("mouseleave", function() {
    $("header nav .dep02_wrap").slideUp(250);
  })
})();

var footerEvent = (function() {
  $("footer .familysite .label ").on("click", function() {
    $(this).next(".siteList").toggle();
  })

  $(".familysite").on("mouseleave", function() {
    $("footer .familysite .label ").trigger("click");
  })
})();

// Flip Eevent
var FlipEvent = function(container, lineCount) {
  this.FLIP_OPEN_CLASS = "active";
  this.FLIP_CLOSE_CLASS = "remove";
  this.$CONTAINER = container;
  this.LINE_COUNT = lineCount;

  this.DIRECTION = ( this.$CONTAINER.find(".flip").hasClass("row") ) ? "row" : "column";
  this.$ELEM = this.$CONTAINER.find(".flip .elem");
  this.ELEM_LENGTH = this.$ELEM.length;

  this.TIME_LENGTH = 150;
  this.TIME_TOTAL_DELAY = this.TIME_LENGTH * (this.ELEM_LENGTH - 1);
};

FlipEvent.prototype.open = function() {
  this.$ELEM.show();
  this.sequenceEvent(this.FLIP_OPEN_CLASS);
};

FlipEvent.prototype.close = function() {
  var self = this;
  this.sequenceEvent(this.FLIP_CLOSE_CLASS);
  setTimeout(function() {
    self.$ELEM.hide();
    self.$ELEM.removeClass(self.FLIP_OPEN_CLASS).removeClass(self.FLIP_CLOSE_CLASS);
  }, self.TIME_TOTAL_DELAY);
};

FlipEvent.prototype.sequenceEvent = function(state) {
  var self = this;
  var timeDelay = 0;
  var lastTimeDelay = this.TIME_TOTAL_DELAY;

  switch (this.LINE_COUNT) {
    case 1 :
      this.$ELEM.each(function(idx){
        setTimeout(function(){
          self.$ELEM.eq(idx).addClass(state);
        }, timeDelay)
        timeDelay += self.TIME_LENGTH;
      })
      break;
    case 2 :
      this.$ELEM.each(function(idx){
        if (idx < self.ELEM_LENGTH / 2) {
          setTimeout(function(){
            self.$ELEM.eq(idx).addClass(state);
          }, timeDelay)
          timeDelay += self.TIME_LENGTH;
        } else {
          setTimeout(function(){
            self.$ELEM.eq(idx).addClass(state);
          }, lastTimeDelay);
          lastTimeDelay -= self.TIME_LENGTH;
        }
      })
      break;
    default :
      return false;
  }
  
};

if ($(".wrap").is("#main")) {
  // $("#main .elemText").on("click", function() {
  //   var mainFlip = new FlipEvent($(this).next(".pop"), 2);
  //   mainFlip.open();

  //   $("#main .closePop").on("click", function() {
  //     mainFlip.close();
  //   })
  // })

  var mainFlip01 = new FlipEvent($("#main .pop01"), 2);
  var mainFlip02 = new FlipEvent($("#main .pop02"), 2);
  var mainFlip03 = new FlipEvent($("#main .pop03"), 2);
  var mainFlip04 = new FlipEvent($("#main .pop04"), 2);

  $("#main .elemText").on("click", function() {
    var popIdx = Number($(this).next(".pop").attr("class").replace(/[^0-9]/g, ""));
    switch (popIdx) {
      case 1 :
        mainFlip01.open();
        break;
      case 2 :
        mainFlip02.open();
        break;
      case 3 :
        mainFlip03.open();
        break;
      case 4 :
        mainFlip04.open();
        break;
      default :
        return false;
    }
  })

  $("#main .closePop").on("click", function() {
    var popIdx = Number($(this).parents(".pop").attr("class").replace(/[^0-9]/g, ""));
    switch (popIdx) {
      case 1 :
        mainFlip01.close();
        break;
      case 2 :
        mainFlip02.close();
        break;
      case 3 :
        mainFlip03.close();
        break;
      case 4 :
        mainFlip04.close();
        break;
      default :
        return false;
    }
  })
}

if ($(".wrap").is("#sub")) {
  $(document).ready(function() {
    var subFlipHorizen = new FlipEvent($(".sub_box .layout_top"), 1);
    var subFlipVertical = new FlipEvent($(".sub_box .layout_left"), 1);
    subFlipHorizen.open();
    subFlipVertical.open();
  })
}