var flipEvent = function(container) {
  if ( container === "undefined") return false;
  var $ELEM = container.find(".row .elem");
  var ELEM_LENGTH = $ELEM.length;
  var TIME_LENGTH = 150;
  var TIME_TOTAL_DELAY = TIME_LENGTH * (ELEM_LENGTH - 1);
  var timeDelay, lastTimeDelay;

  var direction = ( $ELEM.parent(".matrix").hasClass("row") ) ? "row" : "column";
  
  var elemApearEvent = function(state) {
    timeDelay = 0;
    lastTimeDelay = TIME_TOTAL_DELAY;
    $ELEM.each(function(idx){
      if (idx < ELEM_LENGTH / 2) {
        setTimeout(function(){
          $ELEM.eq(idx).addClass(state);
        }, timeDelay)
        timeDelay += TIME_LENGTH;
      } else {
        setTimeout(function(){
          $ELEM.eq(idx).addClass(state);
        }, lastTimeDelay);
        lastTimeDelay -= TIME_LENGTH;
      }
    })
  }

  $ELEM.show();
  elemApearEvent("active");
  setTimeout(function() {
    if ( container.find(".closePop") ) container.find(".closePop").show();
  }, TIME_TOTAL_DELAY);

  $(".closePop").on("click", function() {
    elemApearEvent("remove");
    if ( container.find(".closePop") ) container.find(".closePop").hide();
    setTimeout(function() {
      $ELEM.hide();
      $ELEM.removeClass("active remove");
    }, TIME_TOTAL_DELAY);
  })
};

$(document).ready(function() {
  $("#main .elemText").on("click", function() {
    flipEvent($(this).next(".pop"))
  })
})

var footerEvent = (function() {
  $("footer .familysite .label ").on("click", function() {
    $(this).next(".siteList").toggle();
  })

  $(".familysite").on("mouseleave", function() {
    $("footer .familysite .label ").trigger("click");
  })
})();