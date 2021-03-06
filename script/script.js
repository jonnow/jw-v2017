const bounceClasses = "bouncy fadeIn",
    viewPortSize = $(window).height();
var scrollToLast, scrollToFeatured, triggerAt, triggerHeight, lastBounce = !1,
    lastHeight, secondHeight, thirdHeight;

function scrollTo(o) {
    $("html, body").animate({
        scrollTop: $(o).offset().top
    }, 800)
}
$(function() {
    $("body").hasClass("home") && (scrollToLast = $("#scrollToLast"), scrollToFeatured = $("#scrollToFeatured"), scrollToSecond = $("#scrollToSecond"),scrollToThird = $("#scrollToThird"), lastAt = scrollToLast.offset().top, lastHeight = lastAt - viewPortSize, secondAt = scrollToSecond.offset().top, secondHeight = secondAt - viewPortSize,thirdAt = scrollToThird.offset().top, thirdHeight = thirdAt - viewPortSize, $(".scroll").on("click", function(o) {
        o.preventDefault(), scrollTo($(this).attr("href"))
    }), setTimeout(function() {
        $("body").hasClass("home") && $("body").addClass("ac")
    }, 3250))
}), $(window).scroll(function() {
    $(window).scrollTop() >= lastHeight ? (scrollToFeatured.removeClass(bounceClasses), scrollToLast.addClass(bounceClasses)) : $(window).scrollTop() >= thirdHeight ? (scrollToFeatured.removeClass(bounceClasses), scrollToSecond.removeClass(bounceClasses), scrollToThird.addClass(bounceClasses)) : $(window).scrollTop() >= secondHeight ? (scrollToFeatured.removeClass(bounceClasses), scrollToThird.removeClass(bounceClasses), scrollToSecond.addClass(bounceClasses), lastBounce = !0) : lastBounce && (scrollToFeatured.addClass(bounceClasses), scrollToLast.removeClass(bounceClasses), scrollToSecond.removeClass(bounceClasses), lastBounce = !1)
});