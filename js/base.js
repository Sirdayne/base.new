$(document).ready(function(){        
            
            $('.js-reg').click(function() {
                $(this).addClass('js-active');
                $('.js-aut').removeClass('js-active');
                
                $('.js-form-reg').show();
                $('.js-form-aut').hide();
            });
            
            $('.js-aut').click(function() {
                $(this).addClass('js-active');
                $('.js-reg').removeClass('js-active');
                
                $('.js-form-aut').show();
                $('.js-form-reg').hide();
            });
    
            $('.js-regi').click(function() {
                $('.md-form-reg').show();
                $('.md-form-aut').hide();
            });
            
            $('.js-auth').click(function() {             
                $('.md-form-aut').show();
                $('.md-form-reg').hide();
            });
            
            $('.js-24').click(function() {
                $('.js-time').removeClass('time-active');
                $(this).addClass('time-active');
                
                $('.js-top-time').hide();
                $('.top-24').show();
            });
            
            $('.js-week').click(function() {
                $('.js-time').removeClass('time-active');
                $(this).addClass('time-active');
                
                $('.js-top-time').hide();
                $('.top-week').show();
            });
    
            $('.js-month').click(function() {
                $('.js-time').removeClass('time-active');
                $(this).addClass('time-active');
                
                $('.js-top-time').hide();
                $('.top-month').show();
            });
    
            $('.login-ava').click(function() {
                $('.pr-menu').fadeIn(0);
            });
    
            $(document).mouseup(function (e) {
                var container = $('.login-ava');
                
                if (container.has(e.target).length === 0){
                    $('.pr-menu').fadeOut(0);
            }
            });
    
            $('body').on('click','.slider-checkbox',function(){
        
                $(this).parents('.post').children('.p-post').children('.p-content').slideToggle(500);
                $(this).parents('.post').toggleClass('post-margin');
            });
            
            $('.art-slide').eq( 0 ).css('background', 'url(' + $('.art-slide img').eq( 0 ).attr('src') + ')  center center no-repeat');
            $('.art-slide').eq( 0 ).css('background-size', 'cover');
                
            $('.article h2').click(function() {

                var index = $(".article h2").index(this);
                
                $('.header-slide').hide();
                
                $('.art-slide').hide();
                
                console.log( index );
                
                var imgSrc = $('.art-slide img').eq( index ).attr('src');
                
                $('.art-slide').eq( index ).css('background', 'url(' + imgSrc + ')  center center no-repeat');
                $('.art-slide').eq( index ).css('background-size', 'cover');

                $('.art-slide').eq( index ).show();
                
                $('.dynamic').html( index+1 );
                
                $('.slide-nav').removeClass('sd-nav-act');
                $('.slide-nav').eq( index ).addClass('sd-nav-act');
            /*
            },function(){
                
                $('.art-slide').hide();
                
                $('.header-slide').show();
                
                $('.dynamic').html( '0' );
            */                          
            });
        
            
            $('.slide-nav').click(function() {

                var indexN = $(".slide-nav").index(this);
                
                $('.header-slide').hide();
                
                $('.art-slide').hide();
                
                var imgSrc = $('.art-slide img').eq( indexN ).attr('src');
                
                $('.art-slide').eq( indexN ).css('background', 'url(' + imgSrc + ')  center center no-repeat');
                $('.art-slide').eq( indexN ).css('background-size', 'cover');

                $('.art-slide').eq( indexN ).show();
                
                $('.dynamic').html( indexN+1 );
                
                $('.slide-nav').removeClass('sd-nav-act');
                $('.slide-nav').eq( indexN ).addClass('sd-nav-act');
            /*
            },function(){
                
                $('.art-slide').hide();
                
                $('.header-slide').show();
                
                $('.dynamic').html( '0' );
            */           
            });

    
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
    
    $('.modal-back').click(function() {
        $('.modal-back').fadeOut('fast');
        $('.modal-form-wrap, .modal, .modal-border').fadeOut('fast');
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

