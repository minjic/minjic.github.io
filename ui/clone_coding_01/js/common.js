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
  // this.close(false);
  console.log(this.$ELEM)
  this.$ELEM.show();
  this.sequenceEvent(this.FLIP_OPEN_CLASS);
};

FlipEvent.prototype.close = function(init) {
  this.sequenceEvent(this.FLIP_CLOSE_CLASS);
  setTimeout(function() {
    this.$ELEM.hide();
    this.$ELEM.removeClass(this.FLIP_OPEN_CLASS).removeClass(this.FLIP_CLOSE_CLASS);
  }, this.TIME_TOTAL_DELAY);
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
  $("#main .elemText").on("click", function() {
    var mainFlip = new FlipEvent($(this).next(".pop"), 2);
    mainFlip.open();

    $("#main .closePop").on("click", function() {
      mainFlip.close();
    })
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