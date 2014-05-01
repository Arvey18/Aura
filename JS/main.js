$(document).ready(function(){

    // // $('#homeContainer').css('margin-top', '-657px');
    // $(window).bind('scroll',function(e){
    //     parallaxScroll();

    //     // if($(window).scrollTop == 0);{
    //     // $('#contactsBG').css('margin-top': '700px');
    //     // }
    // });
    //Navigation Scroll
    $(".scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var destination=0;
         if($(this.hash).offset().top > $(document).height()-             
            $(window).height()){
              destination=$(document).height()-$(window).height();
         }else{
              destination=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:destination},1000,'swing');

    });


});



// function parallaxScroll(){
//     var scrolledY = $(window).scrollTop();
//     $('#homeBG').css('top', +((scrolledY*0.5))+'px');
//     // $('#oneMoreBG').css('top','-'+((scrolledY*0.2))+'px');
//     // $('#ourMusicBG').css('top','-'+((scrolledY*0.2))+'px');
//     // $('#contactsBG').css('top','-'+((scrolledY*0.2))+'px');
// }