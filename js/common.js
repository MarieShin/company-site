// 모바일 버전 상단 메뉴버튼
$(".trigger").on({
    "click" : function() {
        if ($(".mobile.hamburger").is(":visible")) {
            $(".mobile.hamburger").hide();
            $(".mobile.close").show();

            $("#main_content").hide();
            $("#main_footer").hide();
            $("#mobile_menu").empty();

            var nav = $(".main_gnb").clone();
            $("#mobile_menu").append(nav);
            $("#mobile_menu").show();

        } else {
            $(".mobile.hamburger").show();
            $(".mobile.close").hide();

            $("#main_content").show();
            $("#main_footer").show();
            $("#mobile_menu").hide();
        }
    }
});

$(window).resize(function() {
    var width = $(window).width();

    if (width > 767) {
        if ($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show();
            $(".mobile.close").hide();

            $("#main_content").show();
            $("#main_footer").show();
            
            $("#mobile_menu").hide();
        }
    } else {
        if ($(".lnb_container").is(":visible")) {
            $(".lnb_container").hide();
            $(".active_bar").hide();
        }
    }
});

/* 하위 메뉴, active bar */

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

            $(".lnb").css("display", "block"); 

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