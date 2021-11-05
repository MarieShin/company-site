// library Swiper
var swiper_communi = new Swiper('.communi-slider', {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: true,
      grabCursor: true,
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
      },
      // loop: true,

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