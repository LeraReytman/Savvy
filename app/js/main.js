$(function(){

  if ($('.decision-wrapper').length || $('.study-wrapper').length || $('.more-wrapper').length) {

    function validatePhoneNumber(input_str) {
  
      var re = /^((8|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  
      return re.test(input_str);
  
    }
  
    $('input').on('focusout', function(e){
  
      let inputName = $(this).attr('name');
      let inputThis = e.target.value

      if (inputThis.length < 1 && inputName === 'text') {
  
        $(this).closest('.form__input').addClass('form__input--error');
  
      } else if (!validatePhoneNumber(inputThis) && inputName === 'phone') {
  
        $(this).closest('.form__input').addClass('form__input--error');
  
      } else {
  
        $(this).closest('.form__input').removeClass('form__input--error');
  
      }
  
    });
  
    $('.form').submit(function (e) { 
  
      e.preventDefault(); 
  
      let formInputText = $(this).find('.form__input--text').attr('id');
      let formInputPhone = $(this).find('.form__input--phone').attr('id');
  
      let text = document.getElementById(formInputText).value;
      let phone = document.getElementById(formInputPhone).value;
  
      let formTest = $(this).attr('id');
      let formId = document.getElementById(formTest);
      let formData = new FormData(formId);
  
      let error = 0

      if (text.length < 1) {
  
        $(this).find('.form__input--text').addClass('form__input--error');
        error++;
  
      }
  
      if (!validatePhoneNumber(phone)) {
  
        $(this).find('.form__input--phone').addClass('form__input--error');
        error++;
  
      } 
  
      async function formSend(e) { 
  
        let response = await fetch('send.php', {
  
          method: 'POST',
          body: formData
  
  
        });
  
        if (response.ok) {
  
          let result = await response.json();
          formId.reset();
          $('.form__label-box').addClass('form__label-box--hidden')
          $('.form__ok').addClass('form__ok--visible')
  
        } else {
  
          alert('Ошибка');
  
        }
  
      }
  
      if (error === 0) {
  
        formSend();
  
      }
  
      return false;
  
    });

  }

  let swiperThree = new Swiper(".swiper-three", {

    slidesPerView: 1,

    spaceBetween: 12,

    loop: true,
  
    speed: 1000,

    navigation: {

      nextEl: '.reviews__arrow--prev',

      prevEl: '.reviews__arrow--next',

    },

    breakpoints: {

      991: {
  
        slidesPerView: 2,
        
        spaceBetween: 36,

      },

      1300: {
  
        slidesPerView: 3,
        
        spaceBetween: 52,

      },
  
    }
  
  });

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

  

  window.onload = (event) => {

    const scroll = new LocomotiveScroll({

      el: document.querySelector('[data-scroll-container]'),
      smooth: true,

    });

    const target = document.querySelector('#top-scroll');

    if ($('.more-wrapper').length) {

      new ResizeObserver(() => 

        scroll.update()).observe(document.querySelector("[data-scroll-container]")

      )

    }

    const elems = document.querySelectorAll(".about-services__items .about-services__item");

    Array.prototype.forEach.call(elems, function(e, i) {

        e.style.zIndex = elems.length - i;

    });

    if (window.innerWidth > 991) {

      const mousHeight = $(this).find('.about-services__item-inner').outerHeight()

      $('.about-services__item:first-child').css('height', mousHeight);

    }

    let flag = false

    if (window.innerWidth > 991) {

      $('.about-services__item').on('mousemove', function() {

        const mousHeight = $(this).find('.about-services__item-inner').outerHeight()

        $('.about-services__item').removeClass('about-services__item--active')
        $(this).addClass('about-services__item--active')

        $('.about-services__item:first-child').css('height', '200');
        $('.about-services__item:not(:first-child)').css('height', '300');

        $(this).css('height', mousHeight);

        if (flag == false) {

          new ResizeObserver(() => 

            scroll.update()).observe(document.querySelector("[data-scroll-container]")

          )

          flag = true

        }

      });

      $('.about-services__item').on('mouseleave', function() {

        setTimeout(() => {

          if ($(this).hasClass('about-services__item--active')) {

            const mousHeight = $(this).find('.about-services__item-inner').outerHeight()

            $(this).css('height', mousHeight);

          }

        }, 600)

      });

    }

    $('.about-services__open').on('click', function() {

      const height = $(this).closest('.about-services__item').find('.about-services__content').height();

      $(this).closest('.about-services__item').find('.about-services__wrapper').css('height', height);
      $(this).closest('.about-services__item').find('.about-services__box').addClass('about-services__box--open')
        
      new ResizeObserver(() => 

        scroll.update()).observe(document.querySelector("[data-scroll-container]")

      )

    });

    $('.about-services__open--close').on('click', function() {

      $(this).closest('.about-services__item').find('.about-services__wrapper').css('height', '0');
      $(this).closest('.about-services__item').find('.about-services__box').removeClass('about-services__box--open')

      new ResizeObserver(() => 
      
        scroll.update()).observe(document.querySelector("[data-scroll-container]")

      )

    });

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