$(document).ready(function(){        
    
    /******************************
     BOTTOM SCROLL TOP BUTTON
     ******************************/
    
    if ($(window).width() > 800) {
        var imgHeight = $('.service-consult').height();
        imgHeight = imgHeight + 250;
        $('.service-consult-img').css('height', imgHeight + 'px');
    }
 /* 
    // declare variable
    var scrollTop = $(".scrollTop");

        $(window).scroll(function(){
            // declare variable
            var topPos = $(this).scrollTop();

           
            //if user scrolls down - show scroll to top button
            if(topPos > 100){
                $(scrollTop).removeClass('slideOutRightBig');
                $(scrollTop).addClass('slideInRightBig');


            }else{
                $(scrollTop).removeClass('slideInRightBig');
                $(scrollTop).addClass('slideOutRightBig');

            }
         

        }); // scroll END

        //Click event to scroll to top
        $(scrollTop).click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;

        });
    
       */
    
    $('.burger').click(function() {
        $('.burger').toggleClass('bur-act');
        $('.nav-center').fadeToggle('fast');
        $('.burger-line-2').fadeToggle('fast');
    });
    
    $('.modal-back, .modal-close').click(function() {
        $('.modal-back').fadeOut('fast');
        $('.modal, .modal-border').fadeOut('fast');
        $('.thx').fadeOut('fast');
    });
    
    $('.jk').click(function() {
        $('.modal-back').fadeIn('fast');
        $('.modal, .modal-border').fadeIn('fast');
    });
    
    var modalH = $('.modal').height();
    modalH = modalH + 50;
    $('.modal-border').css('height', modalH + 'px');

});

