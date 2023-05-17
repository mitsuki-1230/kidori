$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".toggle-btn").on("click", function () {
        $("header").toggleClass("open");
    });

    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });



    $("nav a").on("click", function () {
        $("header").removeClass("open");
    });



    $(".section-ttl").on("inview", 
        function (event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $(this).addClass("fadein");
            } else {
                $(this).removeClass("fadein");
            }
    });

    $(".concept-img").on("inview", 
    function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).addClass("fadeimg");
        } else {
            $(this).removeClass("fadeimg");
        }
    });

    $(".reservation-item img").on("inview", 
    function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).addClass("fadeimg2");
        } else {
            $(this).removeClass("fadeimg2");
        }
    });

    
});