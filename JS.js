const swiper = new Swiper('.swiper',{

  loop: true, // 루프 설정 1 - 2 - 3 - 1 반복

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

   // 자동 재생 원할 경우 설정, 지우면 멈춰 있음
    autoplay: {
      delay: 10000, // 10초마다 슬라이드 넘김
      disableOnInteraction: false, // 자동 재생 중 건드려도 비활성화되지 않음
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });



new Swiper('.swiper-container', {

	slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	spaceBetween : 30, // 슬라이드간 간격
	slidesPerGroup : 1, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

	// 그룹수가 맞지 않을 경우 빈칸으로 메우기
	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
	loopFillGroupWithBlank : true,

	loop : true, // 무한 반복

  pagination : { // 페이징
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},

  autoplay: {
    delay: 5000, // 10초마다 슬라이드 넘김
    disableOnInteraction: false, // 자동 재생 중 건드려도 비활성화되지 않음
  },

});


$('btn-3d').click(function(event){
  event.preventDefault(); 
});