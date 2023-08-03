$(function(){

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