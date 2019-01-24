var uiNoticePopup = (function() {
  document.addEventListener("DOMContentLoaded", function(){
    var closeBtn = document.querySelector(".portfolio--close");
    closeBtn.addEventListener("click", function() {
      this.parentNode.style.display = "none";
    })
  })
})();