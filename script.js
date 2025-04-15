new Swiper('.swiper', {
    loop: true,
    spaceBetween: 17,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        480:{
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 5
        }
    }
  
  });

  const changeFooterDisclaimer = (el,text)=>{
    if(el.target.outerWidth >= 1024){
        // console.log(el.target.outerWidth)
        window.document.querySelector('.footerDisclaimer').innerText = text
    }
  }

  window.addEventListener('resize',(el)=>{
    changeFooterDisclaimer(el,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.")
  }

  )



