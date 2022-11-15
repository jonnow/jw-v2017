const bounceClasses = "bouncy fadeIn",
    _window = $(window),
    viewPortSize = _window.height(),
    backToTop = $('.backToTop');
    
var scrollToLast, scrollToFeatured, triggerAt, triggerHeight, lastBounce = !1,
    lastHeight, secondHeight, thirdHeight;

function scrollTo(o) {
    $("html, body").stop().animate({
        scrollTop: $(o).offset().top
    }, 800)
}

// BACK TO TOP
// // If on page load the user is already scrolled so far, show the back to top button.
$(document).on('load', function(){
    if($('body').hasClass('longContent')){
        if(window.pageYOffset > 750) {
            backToTop.css('opacity', '1');
        }
    }
});

// // If we're on a long content page, watch for scrolling past 750px and show, or hide if we get back above this
if($('body').hasClass('longContent')) {
    backToTop.css('opacity', '0');
    _window.scroll(function() {
        if(_window.scrollTop() > 750) {
            backToTop.css('opacity', '1');
        }
        else {
            backToTop.css('opacity', '0');
        }
    });
};

$(function() {

    // This is written as a '&& operator' or 'Guard Operator' - https://dzone.com/articles/guard-and-default-operators-ja
    // It checks for .home on the body if true it goes into the && part, if false it skips over and GUARDS against an error.
    $('body').hasClass('longContent') && (
        $('#backToTop').on('click', function(e){
            scrollTo('body');
        })
    ),
    $("body").hasClass("home") 
        && 
        (
            scrollToLast = $("#scrollToLast"), 
            scrollToFeatured = $("#scrollToFeatured"), 
            scrollToSecond = $("#scrollToSecond"),
            scrollToThird = $("#scrollToThird"), 
            lastAt = scrollToLast.offset().top, 
            lastHeight = lastAt - viewPortSize, 
            secondAt = scrollToSecond.offset().top, 
            secondHeight = secondAt - viewPortSize,
            thirdAt = scrollToThird.offset().top, 
            thirdHeight = thirdAt - viewPortSize, 
            $(".scroll").on("click", function(o) {
                o.preventDefault(), scrollTo($(this).attr("href"))
            }), setTimeout(function() {
                $("body").hasClass("home") && $("body").addClass("ac")
            }, 3250)
        )
    }), 
    $(window).scroll(function() {
        $(window).scrollTop() >= lastHeight ? (
            scrollToFeatured.removeClass(bounceClasses), 
            scrollToLast.addClass(bounceClasses)) : $(window).scrollTop() >= thirdHeight ? (scrollToFeatured.removeClass(bounceClasses),
            scrollToSecond.removeClass(bounceClasses), 
            scrollToThird.addClass(bounceClasses)) : $(window).scrollTop() >= secondHeight ? (scrollToFeatured.removeClass(bounceClasses), 
            scrollToThird.removeClass(bounceClasses), 
            scrollToSecond.addClass(bounceClasses), 
            lastBounce = !0) : lastBounce && (scrollToFeatured.addClass(bounceClasses), 
            scrollToLast.removeClass(bounceClasses), 
            scrollToSecond.removeClass(bounceClasses), 
            lastBounce = !1
        )
    });
