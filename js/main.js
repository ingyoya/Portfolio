$(document).ready(function () {
  new fullpage('#fullpage', {
    menu: '#menu1',
    lockAnchors: false,
    anchors: ['menu1', 'menu2', 'menu3', 'menu4'],
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
  });




  // $('#header').hide();


  const Dmode = new Swiper(".Dmode", {
    loop: true,
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(".Dmode_list li:nth-child(1)").click(function () {
    $(".swiper-wrapper").addClass("on1");
    $(".swiper-wrapper").removeClass("on2");
    $(".swiper-wrapper").removeClass("on3");
    $(".swiper-wrapper").removeClass("on4");
  });


  $(".Dmode_list li:nth-child(2)").click(function () {
    $(".swiper-wrapper").addClass("on2");
    $(".swiper-wrapper").removeClass("on1");
    $(".swiper-wrapper").removeClass("on3");
    $(".swiper-wrapper").removeClass("on4");
  });

  $(".Dmode_list li:nth-child(3)").click(function () {
    $(".swiper-wrapper").addClass("on3");
    $(".swiper-wrapper").removeClass("on1");
    $(".swiper-wrapper").removeClass("on2");
    $(".swiper-wrapper").removeClass("on4");
  });

  $(".Dmode_list li:nth-child(4)").click(function () {
    $(".swiper-wrapper").addClass("on4");
    $(".swiper-wrapper").removeClass("on1");
    $(".swiper-wrapper").removeClass("on2");
    $(".swiper-wrapper").removeClass("on3");
  });


  $(".info_txt").hide();

  $(".D_txt").find("th").click(function () {
    $(this).addClass("th_back");
    $(this).parent().siblings().find("th").removeClass("th_back");
    $(this).siblings(".info_txt").fadeIn();
    $(this).parent().siblings().find(".info_txt").fadeOut();
  });


});