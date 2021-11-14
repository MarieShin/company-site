// swiper slider (Products)
var brand_name = ["맥심", "맥스웰하우스", "카누", "맥심티오피", "Frima", "현미녹차", "미떼", "포스트", "오레오", "필라델피아"];

var swiper_products = new Swiper('.products-slider', {
      // navigation: {
      //       nextEl: '.swiper-button-next',
      //       prevEl: '.swiper-button-prev',
      // },
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (brand_name[index]) + '</span>';
            },
      },
      effect: 'fade',
      fadeEffect: {
            crossFade: true
      },
      autoplay: {
            delay: 3000,
            disableOnInteraction: false
      },
      speed: 1500,
});

// slick slider (Community)

$('.communi-slider').slick({
      // centerPadding: '60px',
      dots: false,
      arrows: true,
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      nextArrow: $('#aro_next'),
      prevArrow: $('#aro_prev'),
      // customPaging: function(slick, index) {
      //       return '<a>' + (item_name[index]) + '</a>';
      // },
      responsive: [
            {
                  breakpoint: 767,
                  settings: {
                        dots: false,
                        centerPadding: '45px',
                        slidesToShow: 1
                  }
            }
      ]
});