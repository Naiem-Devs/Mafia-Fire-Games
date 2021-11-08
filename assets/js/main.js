(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 




  let itemBtn = document.querySelectorAll('.Person_top li')
  let personBtm = document.querySelector('.Person_btm')
  let personBtmMbl = document.querySelector('.Person_btm_mbl')

  

console.log(itemBtn);
  itemBtn.forEach(itemBtns => {
      itemBtns.addEventListener('click', () => {
          let itemBtnsCont = itemBtns.querySelector('a')
          removeActiveClases()
          personBtm.setAttribute('data-id', itemBtnsCont.textContent )
          personBtmMbl.setAttribute('data-id', itemBtnsCont.textContent )
          itemBtns.classList.add('active')
      })
  })

  function removeActiveClases() {
      itemBtn.forEach(itemBtns => {
          itemBtns.classList.remove('active')
      })
  }






 
})(jQuery);
