$(function() {
    $('.menu-show').on('click', function(e){
        e.preventDefault();
        $('header').toggleClass('menu-open');
    });

    $('.showHome').on('click', function(e){
        e.preventDefault();
        $('.view').hide();
        $('#homeView').show();
    });

    $('.showTableView').on('click', function(e) {
        e.preventDefault();
        $('.view').hide();
        $('#tableView').show();
    });

    $('.showTableView .back-btn').on('click', function(e) {
        e.preventDefault();
        $('.view').hide();
        $('#homeView').show();
    });

    $('.showStepView').on('click', function(e) {
        e.preventDefault();
        $('.view').hide();
        $('#stepView').show();
        $('.steps-step').removeClass('active');
        $('.steps-step.step-1').addClass('active');
        $('.steps-nav li').removeClass('active');
        $('.steps-nav li.step-1').addClass('active');
    });

    $('.goto-2').on('click', function(e) {
        e.preventDefault();
        $(this).parent('.steps-step').removeClass('active');
        $('li.step-1').removeClass('active');
        $('.step-2').addClass('active');
    });

    $('.goto-3').on('click', function(e) {
        e.preventDefault();
        $(this).parent('.steps-step').removeClass('active');
        $('li.step-2').removeClass('active');
        $('.step-3').addClass('active');
    });
    
    $('.goto-4').on('click', function(e) {
        e.preventDefault();
        $(this).parents('.steps-step').removeClass('active');
        $('li.step-3').removeClass('active');
        $('.step-4').addClass('active');
    });

    $('.steps-wizard .back-btn').on('click', function(e){
        e.preventDefault();
        if($('.steps-step.step-1').hasClass('active')) {
            $('.view').hide();
            $('#homeView').show();
            $('.steps-nav li').removeClass('active');
            $('li.step-1').addClass('active');
        }
        else {
            $('.steps-step.active:not(.step-1)').removeClass('active').prev('.steps-step').addClass('active');
            $('.steps-nav li.active:not(.step-1)').removeClass('active').prev('.steps-nav li').addClass('active');
        }
    });

    $('#tableView .back-btn').on('click', function(e){
        e.preventDefault();
        $('#homeView').show();
        $('#tableView').hide();
    });

    $('.dark-mode').on('click', function(e){
        e.preventDefault();

        $(this).addClass('animate');

        setTimeout(function(){
            $('.animate').removeClass('animate');
        }, 1000);
        
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).addClass('not-active');
        
            $('body').removeClass('dark-mode-on');
        }
        else {
            $(this).removeClass('not-active');
            $(this).addClass('active');
            
            $('body').addClass('dark-mode-on');
        }
    });
});