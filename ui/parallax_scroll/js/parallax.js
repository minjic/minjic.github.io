$(document).ready(function() {
	
	// set .contents height
	// var $thirdCon = $(".contents .third");
	// var conHeight =  parseInt($thirdCon.css("top")) + $thirdCon.outerHeight();
	// $(".content-wrap").css("minHeight", (conHeight + $("header").outerHeight())+"px");
	// $(".contents").css("minHeight", conHeight + "px");

	redrawDotNav();

  $(window).bind('scroll',function(e){
  	parallaxScroll();
		redrawDotNav();
  });
    
	// /* Next/prev and primary nav btn click handlers */
	// $('a.manned-flight').click(function(){
  //   	$('html, body').animate({
  //   		scrollTop:0
  //   	}, 1000, function() {
	//     	parallaxScroll(); // Callback is required for iOS
	// 	});
  //   	return false;
	// });
  //   $('a.frameless-parachute').click(function(){
  //   	$('html, body').animate({
  //   		scrollTop:$('#frameless-parachute').offset().top
  //   	}, 1000, function() {
	//     	parallaxScroll(); // Callback is required for iOS
	// 	});
  //   	return false;
  //   });
  //   $('a.english-channel').click(function(){
  //   	$('html, body').animate({
  //   		scrollTop:$('#english-channel').offset().top
  //   	}, 1000, function() {
	//     	parallaxScroll(); // Callback is required for iOS
	// 	});
  //   	return false;
  //   });
	// $('a.about').click(function(){
  //   	$('html, body').animate({
  //   		scrollTop:$('#about').offset().top
  //   	}, 1000, function() {
	//     	parallaxScroll(); // Callback is required for iOS
	// 	});
  //   	return false;
  //   });
    
  //   /* Show/hide dot lav labels on hover */
  //   $('nav#primary a').hover(
  //   	function () {
	// 		$(this).prev('h1').show();
	// 	},
	// 	function () {
	// 		$(this).prev('h1').hide();
	// 	}
  //   );
    
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.1))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var onClass = "on";
	var documentTop = $(document).scrollTop();
	console.log("nav start!",documentTop);
	var section1Top =  0;
	var section2Top =  $('.contents .second').offset().top - (($('.contents .third').offset().top - $('.contents .second').offset().top) / 2);
	var section3Top =  $('.contents .third').offset().top - (($(document).height() - $('.contents .third').offset().top) / 2);
	console.log(section3Top)
	$('.nav-btn li').removeClass(onClass);
	if(documentTop >= section1Top && documentTop < section2Top){
		console.log(1)
		$('.nav-btn li').eq(0).addClass(onClass);
	} else if (documentTop >= section2Top && documentTop < section3Top){
		console.log(2)
		$('.nav-btn li').eq(1).addClass(onClass);
	} else if (documentTop >= section3Top){
		console.log(3)
		$('.nav-btn li').eq(2).addClass(onClass);
	}
	
}


