

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
    //Navigation fadeIn Effect
    $(window).scroll(function() {
      if ($(this).scrollTop() > 700) {
        $( "#navigation" ).fadeIn();
      } else {
        $( "#navigation" ).fadeOut();
      }
    });

    $('#allworks').click(function(){
      $('.worksNav').css('background', 'none');
      $('#allworks').css('background','#f5f5f5');
      $('.worksImages').css('opacity', '1.0');
      return false;

    });

    $('#designWorks').click(function(){
      $('.worksNav').css('background', 'none');
      $('#designWorks').css('background','#f5f5f5');
      $('.worksImages').css('opacity', '1.0');
      $('#workImg1').css('opacity', '0.1');
      $('#workImg3').css('opacity', '0.1');
      return false;

    });

    $('#illuWorks').click(function(){
      $('.worksNav').css('background', 'none');
      $('#illuWorks').css('background','#f5f5f5');
      $('.worksImages').css('opacity', '1.0');
      $('#workImg3').css('opacity', '0.1');
      $('#workImg4').css('opacity', '0.1');
      $('#workImg5').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      return false;

    });

    $('#marketingWorks').click(function(){
      $('.worksNav').css('background', 'none');
      $('#marketingWorks').css('background','#f5f5f5');
      $('.worksImages').css('opacity', '1.0');
      $('#workImg1').css('opacity', '0.1');
      $('#workImg4').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      return false;

    });

    $('#printWorks').click(function(){
      $('.worksNav').css('background', 'none');
      $('#printWorks').css('background','#f5f5f5');
      $('.worksImages').css('opacity', '1.0');
      $('#workImg1').css('opacity', '0.1');
      $('#workImg3').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      return false;

    });

    $('#typWorks').click(function(){
      $('.worksNav').css('background', 'none');
      $('#typWorks').css('background','#f5f5f5');
      $('.worksImages').css('opacity', '1.0');
      $('#workImg2').css('opacity', '0.1');
      $('#workImg4').css('opacity', '0.1');
      $('#workImg5').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      return false;

    });

    $('#webWorks').click(function(){
      $('.worksNav').css('background', 'none');
      $('#webWorks').css('background','#f5f5f5');
      $('.worksImages').css('opacity', '1.0');
      $('#workImg3').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      return false;
    });
    
