/* swiper slider (Products) */
var brand_name = ["맥심", "맥스웰하우스", "카누", "맥심티오피", "Frima", "현미녹차", "미떼", "포스트", "오레오", "필라델피아"];

var swiper_products = new Swiper('.products-slider', {
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
            disableOnInteraction: true
      },
      speed: 2500
});

// 버튼 기능 추가
$('.swiper-play').on("click", function() {
      swiper_products.autoplay.start();
});

$('.swiper-pause').on("click", function() {
      swiper_products.autoplay.stop();
});


/* slick slider (Community) */
$('.communi-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      nextArrow: $('#aro_next'),
      prevArrow: $('#aro_prev'),
      responsive: [
            {
                  breakpoint: 1340,
                  settings: {
                        dots: false,
                        slidesToShow: 3
                  }
            },

            {
                  breakpoint: 1023,
                  settings: {
                        dots: false,
                        slidesToShow: 3
                  }
            },

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

// AOS init
AOS.init({
      // 모바일버전에서 애니메이션 작동 안함
      disable: function() {
            var maxWidth = 767;
            return window.innerWidth < maxWidth;
      }
});
