$(function(){

  window.onload = (event) => {

    const scroll = new LocomotiveScroll({

      el: document.querySelector('[data-scroll-container]'),
      smooth: true,

    });
  
    scroll.on('scroll', (args) => {

      if ($('.decision-wrapper').length) {

        let servicesOne = $('.services__bg-one--one').offset().top + 200;
        let servicesTwo = $('.services__bg-one--two').offset().top + 200;
        let servicesThree = $('.services__bg-one--three').offset().top + 200;

        let wScroll = $('.decision-wrapper').offset().top;
        wScroll = Math.abs(wScroll);
        const height = $(window).height();

        console.log(wScroll)

        console.log(servicesTwo + height)

        const servicesOnePos = (wScroll + height - servicesOne);
        const servicesTwoPos = (wScroll + height - servicesTwo);
        const servicesThreePos = (wScroll + height - servicesThree);

        if (wScroll >= servicesOne) {

          $('.services__bg-one--one').css({

            'transform' : 'rotate(' + (servicesOnePos) * 0.2 + 'deg)'

          });

        }

        if (wScroll >= servicesTwo) {

          $('.services__bg-one--two').css({

            'transform' : 'rotate(' + (servicesTwoPos) * 0.2 + 'deg)'

          });

        }

        if (wScroll >= servicesThree) {

          $('.services__bg-one--three').css({

            'transform' : 'rotate(' + (servicesThreePos) * 0.2 + 'deg)'

          });

        }

      }

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
    scroll.stop()
    

  })

  let swiper = new Swiper(".swiper-one", {

    slidesPerView: 2,

    spaceBetween: 32,

    speed: 1000,

    centeredSlides: true,

    autoplay: {

      delay: 2000,

    }, 

    breakpoints: {

      767: {

        spaceBetween: 60,

      },


      1200: {

        spaceBetween: 114,

      },

    }

  });
  
});