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
        scrollToSecond = $('#scrollToSecond');
        lastAt = scrollToLast.offset().top;
        lastHeight = lastAt - viewPortSize;

        secondAt = scrollToSecond.offset().top;
        secondHeight = secondAt - viewPortSize;
    
        $('.scroll').on('click', function(e){
            e.preventDefault();
            scrollTo($(this).attr('href'));
        });

        // prevents the animation from playing on screen resize
        setTimeout(function(){
            $('body').hasClass('home') ? $('body').addClass('ac') : void 0; // Animation complete
        }, 3250);

        console.log('lastHeight: ' + lastHeight);
        console.log('secondHeight: ' + secondHeight);

    }
});

function scrollTo(href) {
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);
}

$(window).scroll(function () {
    // This If works from the bottom up
    if ($(window).scrollTop() >= lastHeight) {
       scrollToFeatured.removeClass(bounceClasses);
       scrollToLast.addClass(bounceClasses);
    }
    else if  ($(window).scrollTop() >= secondHeight) {
        scrollToFeatured.removeClass(bounceClasses);
        scrollToSecond.addClass(bounceClasses);
        lastBounce = true;
        console.log('second: ' + $(window).scrollTop());
     }
    else if(lastBounce) {
        scrollToFeatured.addClass(bounceClasses);
        scrollToLast.removeClass(bounceClasses);
        scrollToSecond.removeClass(bounceClasses);
        lastBounce = false;
    }
});