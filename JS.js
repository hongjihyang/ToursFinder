const swiper = new Swiper('.swiper', {

    loop: true, // 루프 설정 1 - 2 - 3 - 1 반복

      // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },


      // 자동 재생 원할 경우 설정, 지우면 멈춰 있음
  autoplay: {
    delay: 10000, // 10초마다 슬라이드 넘김
    disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
  },  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });