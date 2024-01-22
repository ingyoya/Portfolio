$(document).ready(function () {
    // dafault
    const mb = new Swiper('.mb', {
        // 옵션
        speed: 1000,  // 슬라이드 동작 속도
        loop: true,  // 슬라이드 반복 여부
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        // 페이저 버튼 지정
        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar' 
            clickable: true,  // 버튼 클릭 여부
        },

        // 방향 버튼 지정
        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },
    });
});