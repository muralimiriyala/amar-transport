jQuery(document).ready(function($){
    let lastScrollTop = 0;
    $(window).on("scroll load", function(){
        let scroll = $(this).scrollTop();
        scroll > lastScrollTop ? $("#header").addClass("scroll-nav-down").removeClass("scroll-nav-up") : $("#header").addClass("scroll-nav-up").removeClass("scroll-nav-down");
        lastScrollTop = scroll;
    });

    if($(window).width() >= 768){
        $(".leadership-list").each(function() {
            let _this = $(this).children('.leadership-text');
            let descItem = _this.find(".leadership-desc");
            _this.mouseenter(function() {
                descItem.stop(true, false).slideDown(1000);
            }).mouseleave(function() {
                descItem.stop(true, false).slideUp(1000);
            });
        });
    }

    if($(window).width() <= 767){
        $(".footer-list span").on("click", function(e){
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).parent().siblings(".footer-list").find("ul.footer-links").slideUp(800);
            $(this).siblings("ul.footer-links").slideToggle(800);
        });
    }

});