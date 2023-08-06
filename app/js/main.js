$(function(){

  window.onload = (event) => {

    let swiperTwo = new Swiper(".swiper-two", {
    
      direction: 'vertical',

      slidesPerView: 1,

      loop: true,
    
      speed: 1000,

      allowTouchMove: false,

      allowMouseEvents: false,
    
      autoplay: {
    
        delay: 2000,
    
      }, 
    
    });

    const scroll = new LocomotiveScroll({

      el: document.querySelector('[data-scroll-container]'),
      smooth: true,

    });

    const target = document.querySelector('#top-scroll');

    $('.arrow-up').on('click', function() {

      scroll.scrollTo(target);

    })

    if ($('.decision-wrapper').length) {
      
      let servicesOne = $('.services__bg-one--one').offset().top;
      let servicesTwo = $('.services__bg-one--two').offset().top;
      let servicesThree = $('.services__bg-one--three').offset().top;

      scroll.on('scroll', (args) => {

        let wScroll = $('.decision-wrapper').offset().top;
        wScroll = Math.abs(wScroll);
        const height = $(window).height();

        const servicesOnePos = (wScroll + height - servicesOne);
        const servicesTwoPos = (wScroll + height - servicesTwo);
        const servicesThreePos = (wScroll + height - servicesThree);

        if (wScroll + height >= servicesOne) {

          $('.services__bg-one--one').css({

            'transform' : 'rotate(' + (servicesOnePos) * 0.4 + 'deg)'

          });

        }

        if (wScroll + height >= servicesTwo) {

          $('.services__bg-one--two').css({

            'transform' : 'rotate(' + (servicesTwoPos) * 0.4 + 'deg)'

          });

        }

        if (wScroll + height >= servicesThree) {

          $('.services__bg-one--three').css({

            'transform' : 'rotate(' + (servicesThreePos) * 0.4 + 'deg)'

          });

        }

      });

    }
    
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

    $('.menu--header').toggleClass('menu--active')
    $(this).toggleClass('header__burger--active')
    $('body').toggleClass('body-hidden')

  })

  let swiper = new Swiper(".swiper-one", {

    spaceBetween: 32,
  
    slidesPerView: 1,
  
    centeredSlides: false,
  
    speed: 1000,
  
    autoplay: {
  
      delay: 2000,
      disableOnInteraction: false,
  
    }, 
  
    freeMode: true,
  
    breakpoints: {
  
      767: {
  
        spaceBetween: 60,
  
        slidesPerView: 2,
  
        centeredSlides: true,
        
  
      },
  
      1200: {
  
        spaceBetween: 114,
  
        spaceBetween: 60,
  
        slidesPerView: 2,
  
        centeredSlides: true,
  
      },
  
    }
  
  });
  
});