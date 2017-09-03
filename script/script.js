const   viewPortSize = $(window).height(),
        scrollToLast = $('#scrollToLast'),
        scrollToFeatured = $('#scrollToFeatured'),
        bounceClasses = 'bouncy fadeIn',
        triggerAt = scrollToLast.offset().top,
        triggerHeight = triggerAt - viewPortSize;
var     lastBounce = false;

$(function(){
    scrollToFeatured.on('click', function(e){
        e.preventDefault();
        scrollTo($(this).attr('href'));
    });

    scrollToLast.on('click', function(e){
        e.preventDefault();
        scrollTo($(this).attr('href'));
    });
});

function scrollTo(href) {
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= triggerHeight) {
       scrollToFeatured.removeClass(bounceClasses);
       scrollToLast.addClass(bounceClasses);
       lastBounce = true;
    }
    else if(lastBounce) {
        scrollToFeatured.addClass(bounceClasses);
        scrollToLast.removeClass(bounceClasses);
        lastBounce = false;
    }
});