// library Swiper
// var swiper_communi = new Swiper('.communi-slider', {
//       slidesPerView: 4,
//       spaceBetween: 20,
//       centeredSlides: true,
//       grabCursor: true,
//       navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//       },
//       pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//       },
//       // loop: true,
// });

var brand_name = ["맥심", "맥스웰하우스", "카누", "맥심티오피", "Frima", "현미녹차", "미떼", "포스트", "오레오", "필라델피아"];

var swiper_communi = new Swiper('.products-slider', {
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },
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

// slick slider
$('.communi-slider').slick({
      // centerPadding: '60px',
      dots: true,
      arrows: false,
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      pauseOnHover: false,
      pauseOnFocus: false,
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

// navbar sticky
// window.onscroll = function() { onScroll() };

// var navbar = document.getElementById(".main_gnb");
// var sticky = navbar.offsetTop;

// function onScroll() {
//       if (window.pageYOffset >= sticky) {
//             navbar.classList.add("sticky");
//       } else {
//             navbar.classList.remove("sticky");
      
//       }
// }