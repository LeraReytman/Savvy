$(function(){

  window.onload = (event) => {

    const scroll = new LocomotiveScroll({

      el: document.querySelector('[data-scroll-container]'),
      smooth: true

    });
  
    scroll.on('scroll', (args) => {
  
      if(typeof args.currentElements['num-one'] === 'object') {
  
        $('.why__numb--one').addClass('why__numb--visible')

      }

      if(typeof args.currentElements['num-two'] === 'object') {
  
        $('.why__numb--two').addClass('why__numb--visible')

      }

      if(typeof args.currentElements['num-three'] === 'object') {
  
        $('.why__numb--three').addClass('why__numb--visible')

      }
  
    });

  };

  $('.header__burger').on('click', function() {

    $('.menu').toggleClass('menu--active')
    $(this).toggleClass('header__burger--active')

  })

  let swiper = new Swiper(".swiper-one", {

    slidesPerView: 2,

    spaceBetween: 114,

    speed: 1000,

    centeredSlides: true,

    autoplay: {

      delay: 2000,

    }, 

  });
  
});