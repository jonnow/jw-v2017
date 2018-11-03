const   bounceClasses = 'bouncy fadeIn',
        viewPortSize = $(window).height();

var     scrollToLast,
        scrollToFeatured,
        triggerAt,
        triggerHeight,
        lastBounce = false;

$(function(){
    if($('body').hasClass('home')) {
        scrollToLast = $('#scrollToLast');
        scrollToFeatured = $('#scrollToFeatured');
        triggerAt = scrollToLast.offset().top;
        triggerHeight = triggerAt - viewPortSize;
    
        scrollToFeatured.on('click', function(e){
            e.preventDefault();
            scrollTo($(this).attr('href'));
        });

        scrollToLast.on('click', function(e){
            e.preventDefault();
            scrollTo($(this).attr('href'));
        });

        // prevents the animation from playing on screen resize
        setTimeout(function(){
            $('body').hasClass('home') ? $('body').addClass('ac') : void 0; // Animation complete
        }, 3250);

    }
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