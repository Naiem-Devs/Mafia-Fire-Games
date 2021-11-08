(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  
  const zoomElement = document.querySelector("#heroBg");
  let zoom = 1;
  const ZOOM_SPEED = 0.1;

  document.addEventListener("scroll", function(e) {
      if( window.scrollY < 100) {
          zoomElement.style.transform=`scale(1) `
      }
      else if( window.scrollY < 200) {
          zoomElement.style.transform=`scale(1.05) `
      }
      else if( window.scrollY < 300) {
          zoomElement.style.transform=`scale(1.1) `
      }
      else if( window.scrollY < 400) {
          zoomElement.style.transform=`scale(1.15) `
      }
      
      else if( window.scrollY < 500) {
          zoomElement.style.transform=`scale(1.2) `
      }
      else if( window.scrollY < 600) {
          zoomElement.style.transform=`scale(1.25) `
      }
      else if( window.scrollY < 800) {
          zoomElement.style.transform=`scale(1.3) `
      }
      else if( window.scrollY < 1000) {
          zoomElement.style.transform=`scale(1.35) `
      }

  });
 
})(jQuery);
