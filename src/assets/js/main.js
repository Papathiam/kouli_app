
    //  swipper
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 400,
        spaceBetween: 100,
        effect: 'fade',
       // effect: 'cube', .// 'flip', 'fade','coverflow', 'slide'
        init: true,
     
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
     
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
     
      // autoplay 
        autoplay: {
              delay: 5000,
          },
     
      });