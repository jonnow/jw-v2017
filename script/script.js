const bounceClasses="bouncy fadeIn",viewPortSize=$(window).height();var scrollToLast,scrollToFeatured,triggerAt,triggerHeight,lastBounce=!1;function scrollTo(o){$("html, body").animate({scrollTop:$(o).offset().top},800)}$(function(){$("body").hasClass("home")&&(scrollToLast=$("#scrollToLast"),scrollToFeatured=$("#scrollToFeatured"),scrollToSecond=$("#scrollToSecond"),lastAt=scrollToLast.offset().top,lastHeight=lastAt-viewPortSize,secondAt=scrollToSecond.offset().top,secondHeight=secondAt-viewPortSize,$(".scroll").on("click",function(o){o.preventDefault(),scrollTo($(this).attr("href"))}),setTimeout(function(){$("body").hasClass("home")&&$("body").addClass("ac")},3250))}),$(window).scroll(function(){$(window).scrollTop()>=lastHeight?(scrollToFeatured.removeClass(bounceClasses),scrollToLast.addClass(bounceClasses)):$(window).scrollTop()>=secondHeight?(scrollToFeatured.removeClass(bounceClasses),scrollToSecond.addClass(bounceClasses),lastBounce=!0):lastBounce&&(scrollToFeatured.addClass(bounceClasses),scrollToLast.removeClass(bounceClasses),scrollToSecond.removeClass(bounceClasses),lastBounce=!1)});