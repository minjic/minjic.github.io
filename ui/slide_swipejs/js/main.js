var $slides = $(".swiper-slide");

  var onSlide = function() {    
    $slides.removeClass("on").removeClass("off");
    $(".swiper-slide-active").addClass("on");

    setTimeout(function() {
      $(".swiper-slide-active").addClass("off");
    }, 2500)
  };

  $('.main-visual .swiper-container').imagesLoaded(function() {
    var mySwiper = new Swiper ('.swiper-container', {
      on : {
        init: onSlide
      },
      direction: 'horizontal',
      loop: true,
      speed: 800,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.slide-pagination-list',
        clickable : true
      },
      navigation: {
        nextEl: '.slide-btn-next',
        prevEl: '.slide-btn-prev',
      }
    })

    // pagination setting
    $slides.each(function(i) {
        var name = $(this).find(".txt .sub").text();
        $(".swiper-pagination-bullet").eq(i).text(name);
    })

    // pagination bullet setting
    mySwiper.on('slideChange', function() {
      var idx = mySwiper.realIndex;
      $(".main-visual .slide-pagination i.bullet").css("top", ((35 * idx) + 6 ) +"px");
    });
    
    mySwiper.on('slideChangeTransitionStart', function() {
      onSlide();
    })
  }) 
  
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();  
    var winHeight = window.innerHeight;
    if (winTop > winHeight) $("header").addClass("on");
    else $("header").removeClass("on");  
  })