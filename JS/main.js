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
        
         //console.log(destination); -->
});