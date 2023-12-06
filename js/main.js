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
            type: 'fraction',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true,  // 버튼 클릭 여부
        },

        // 방향 버튼 지정
        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },
    });

    $('.btn_play').hide();
    $('.btn_pause').click(function () {
        mb.autoplay.stop();
        $('.btn_pause').hide();
        $('.btn_play').show();
    });

    $('.btn_play').click(function () {
        mb.autoplay.start(); // mb : 슬라이드의 변수 이름
        $('.btn_play').hide();
        $('.btn_pause').show();
    });


    // news-slide
    const news_list = new Swiper('.news_list', {
        // 옵션
        direction: 'vertical', // 수직 슬라이드
        speed: 1000,  // 슬라이드 동작 속도
        loop: true,  // 슬라이드 반복 여부
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
    });

    // product-slide
    const prd_list = new Swiper('.prd_list', {
        // 옵션
        speed: 1000,  // 슬라이드 동작 속도
        loop: true,  // 슬라이드 반복 여부
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: 2,
        spaceBetween: 50,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false, // 기본으로 숨겨져있는 스크롤바
        },
        breakpoints: {
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 50,
            },
            1400: {  // 가로해상도가 1400px 이상일 경우
                slidesPerView: 6,
                spaceBetween: 50,
            },
        },

    });

    // teaware
    //$('.tab li:nth-cild(1)').addClass('active');
    $('.tab li').eq(0).addClass('active');
    $('.tab_img img:nth-child(n+2)').hide();


    //.tab li를 클릭했을 때 
    //클릭한 번호를 찾아서
    //.tab_img img 중 클릭한 li 번호와 일치하는 것을 보여라
    $('.tab li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var indexNum = $(this).index();
        $('.tab_img img').eq(indexNum).fadeIn().siblings().fadeOut();
    });


    // $('.tab li:nth-child(1)').click(function () {

    //     $(this).addClass('active').siblings().removeClass('active');

    //     $('.tab_img img:nth-child(1)').animate({
    //         opacity: '1',
    //     });
    //     $('.tab_img img:nth-child(1)').siblings().animate({
    //         opacity: '0',
    //     });
    // });

    // $('.tab li:nth-child(2)').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $('.tab_img img:nth-child(2)').animate({
    //         opacity: '1',
    //     });
    //     $('.tab_img img:nth-child(2)').siblings().animate({
    //         opacity: '0',
    //     });
    // });

    // $('.tab li:nth-child(3)').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $('.tab_img img:nth-child(3)').animate({
    //         opacity: '1',
    //     });
    //     $('.tab_img img:nth-child(3)').siblings().animate({
    //         opacity: '0',
    //     });
    // });

    // $('.tab li:nth-child(4)').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    //     $('.tab_img img:nth-child(4)').animate({
    //         opacity: '1',
    //     });
    //     $('.tab_img img:nth-child(4)').siblings().animate({
    //         opacity: '0',
    //     });
    // });


    //museum
    $('.museum_list li:nth-child(1)').addClass('on');

    $('.museum_list li').mouseenter(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });


}); //문서준비이벤트 종료