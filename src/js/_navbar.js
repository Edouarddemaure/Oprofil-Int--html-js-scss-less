//var myNav = document.getElementById('nav');
//window.onscroll = function () { 
//    "use strict";
//    if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
        
//      myNav.classList.replace("navbar", "navbar.scrolled" );
        
//    } 
//    else {
//      myNav.classList.replace("navbar.scrolled", "navbar" );
//    }
//};

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    
    $nav.toggleClass('scrolled', $(this).scrollTop() > 900);
   
	});
});
