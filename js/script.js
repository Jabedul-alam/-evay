$(function (){
$(window).on('scroll',function(){
    //script for sticy menu;
    var scroolpostion=$(window).scrollTop();
    if(scroolpostion > 0){
        $('#manu').addClass('stickynav');
    }else{
        $('#manu').removeClass('stickynav');
    }

    //back to top
    if(scroolpostion > 600){
        $('#back').fadeIn(1000);
    }else{
        $('#back').fadeOut(1000);
    }
    
    
})
$('#back').on('click',function(){
    $("html,body").animate({
        scrollTop:0
    },1000)

})
//preloader

$(window).on('load',function(){
    $('#preloader').fadeOut(1000);
})

//SMOTH SCROLL
    $('a').on('click',function(e){
        e.preventDefault();

        if(this.hash !=""){
            var hash=$(this.hash)
            $("html,body").animate({
                scrollTop:$(hash).offset().top - 68
            })
        
        }
        

    })
    //slick.js

    $('#banner').slick({
        fade: true,
        speed:500,
        autoplay:true,
        autoplaySpeed:3000,
        prevArrow:"<i class='fas fa-chevron-left banner_arrow'></i>",
        nextArrow:"<i class='fas fa-chevron-right banner_arrow'></i>",

    })
    $('.letest_pro ').slick({
        slidesToShow:4,
        prevArrow:"<i class='fas fa-chevron-left banner_arrow'></i>",
        nextArrow:"<i class='fas fa-chevron-right banner_arrow'></i>",

    })
})

