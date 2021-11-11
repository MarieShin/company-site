// swiper slider (Products)
var brand_name = ["맥심", "맥스웰하우스", "카누", "맥심티오피", "Frima", "현미녹차", "미떼", "포스트", "오레오", "필라델피아"];

var swiper_communi = new Swiper('.products-slider', {
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
var item_name = ['사', '회', '공', '헌', '·', 'N', 'E', 'W', 'S', '·'];

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
      customPaging: function(slick, index) {
            return '<a>' + (item_name[index]) + '</a>';
      },
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

$(function() {
      var gnbFlag = false;
      var gnbIndex;

      $('.gnb li').on({
            "mouseenter" : function() {
                  /* lnb show */
                  if (gnbIndex != undefined) {
                        $(".lnb").eq(gnbIndex).css("display", "none");
                  }

                  gnbIndex = $(this).index();
                  gnbFlag = true;

                  // 애니메이션 효과 적용
                  $(".lnb_container").removeClass("disappear");
                  $(".lnb_container").addClass("appear");
                  $(".lnb_container").show();

                  $(".lnb").css("display", "inline-block"); 

                  /* 액티브 바 show */

                  $(".active_bar").show();

                  // 선택된 li의 left와 width를 구해 active_bar의 위치와 길이를 조절한다.
                  var listLeft = $(this).offset().left;
                  var listWidth = $(this).width();

                  $(".active_bar").width(listWidth);
                  $(".active_bar").offset({left: listLeft});
            }
      });

      /* 하위 메뉴 안보이게 처리 */
      $(".lnb_container").on({
            "mouseleave" : function() {
                  if (gnbFlag) {
                        $(".lnb_container").removeClass("appear");
                        $(".lnb_container").addClass("disappear");
                        $(".lnb_container").hide();
                        $(".active_bar").hide();
                  } else {
                        return;
                  }
            }      
      });
});