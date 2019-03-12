var parallaxScroll = function(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.1))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
};

var navBtnOn = function(){
	var onClass = "on";
	var documentTop = $(document).scrollTop();
	
	var section1Top =  0;
	var section2Top =  $('.contents .second').offset().top - (($('.contents .third').offset().top - $('.contents .second').offset().top) / 2);
	var section3Top =  $('.contents .third').offset().top - (($(document).height() - $('.contents .third').offset().top) / 2);
	
	$('.nav-btn li').removeClass(onClass);
	if(documentTop >= section1Top && documentTop < section2Top){
		$('.nav-btn li').eq(0).addClass(onClass);
	} else if (documentTop >= section2Top && documentTop < section3Top){
		$('.nav-btn li').eq(1).addClass(onClass);
	} else if (documentTop >= section3Top){
		$('.nav-btn li').eq(2).addClass(onClass);
	}	
};

$(document).ready(function() {
	navBtnOn();

  $(window).on('scroll',function(e){
  	parallaxScroll();
		navBtnOn();
  });    

	$('.nav-btn li .button').click(function(){
		var index = $(this).parent("li").index();
		var toScrollTop;
		if (index === 0) toScrollTop = 0;
		else toScrollTop = $(".contents article").eq(index).offset().top;

		$("html, body").animate({
			scrollTop : toScrollTop
		}, 500, function() {
			parallaxScroll();
		});
	});    
});



