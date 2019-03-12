var uiNoticePopup = (function() {
  document.addEventListener("DOMContentLoaded", function(){
    var closeBtn = document.querySelector(".portfolio--close");
    closeBtn.addEventListener("click", function() {
      this.parentNode.style.display = "none";
    })
  })
})();

var mobileCheck = (function() {
  var checkMobile = function () {
    var mobileOS = {
      Android: function () {
        return navigator.userAgent.match(/Android/i) ? true : false;
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
      },
      Windows: function () {
        return navigator.userAgent.match(/Windows Phone|IEMobile/i) ? true : false;
      },
      any: function () {
        return (mobileOS.Android() || mobileOS.BlackBerry() || mobileOS.iOS() || mobileOS.Windows());
      }
    };

    return mobileOS.any();
  };
  
  return function() {
    if ( checkMobile() ) alert("현재 페이지는 PC 버전으로 작업되었습니다:)");
  };
})()