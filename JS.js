let swiper = new Swiper('.swiper-container', {

  loop: true,
  centeredSlides: true,
  slidesPerView: '3',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    depth: 350,
    slideShadows: true ,
    // modifier:1,
    // stretch: 50
  },




});

