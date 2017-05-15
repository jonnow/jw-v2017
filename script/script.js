$(function(){
    $('#scrollToFeatured').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#_featured').offset().top
        }, 800);
    });
});