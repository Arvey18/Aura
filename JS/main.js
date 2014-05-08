
  var homeheight = $('#homeContainer').height();
  var worktop = $('#ourWorks').offset().top;
  var clienttop = $('#ourClients').offset().top;
  var teamtop = $('#ourTeamContainer').offset().top;
  var musictop = $('#ourMusic').offset().top;
  var servicestop = $('#services').offset().top;
  var top = $('#homeContainer').outerHeight();
  var bottom = $('#ourWorks').outerHeight();
  // var totHeight = $(window).height();


  $('#homeContainer').on("loadedmetadata", scaleBg);
  $(window).on("resize", scaleBg);

  function scaleBg(){

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    var homeContainerHeight = $('#homeContainer')[0].windowHeight;
    var homeContainerWidth = $('#homeContainer')[0].windowWidth;

    var heightScaleFactor = windowHeight / homeContainerHeight;
    var widthScaleFactor = windowWidth / homeContainerWidth;

    if (widthScaleFactor > heightScaleFactor){

      var scale = widthScaleFactor;

    }else{

      var scale = heightScaleFactor;

    }

    var scaleHomeHeight = homeContainerHeight * scale;
    var scaleHomeWidth = homeContainerWidth * scale;

    $('#homeContainer').height(scaleHomeHeight);
    $('#homeContainer').height(scaleHomeWidth);

  }

    // Navigation fadeIn Effect and active effect
    $(window).scroll(function() {

      if ($(this).scrollTop() > homeheight) {
        $( "#navigations" ).fadeIn();
      } else {
        $( "#navigations" ).fadeOut("fast");
      }

      if ($(this).scrollTop() >= worktop){
        $( ".nav-active" ).removeClass("nav-active");
        $( "#workNav" ).addClass("nav-active");
        $( ".nav-li a" ).css("color", "#909090");
        $( "#workNav a" ).css("color", "black");
      }else{
        $( ".nav-active" ).removeClass("nav-active");
        $( "#homeNav" ).addClass("nav-active");
        $( ".nav-li a" ).css("color", "#909090");
        $( "#homeNav a" ).css("color", "black");
      }

      if ($(this).scrollTop() >= clienttop - 60){
        $( ".nav-active" ).removeClass("nav-active");
        $( "#clientsNav" ).addClass("nav-active");
        $( ".nav-li a" ).css("color", "#909090");
        $( "#clientsNav a" ).css("color", "black");
      }

      if ($(this).scrollTop() >= teamtop - 60){
        $( ".nav-active" ).removeClass("nav-active");
        $( "#teamNav" ).addClass("nav-active");
        $( ".nav-li a" ).css("color", "#909090");
        $( "#teamNav a" ).css("color", "black");
      }

      if ($(this).scrollTop() >= musictop - 60){
        $( ".nav-active" ).removeClass("nav-active");
        $( "#musicNav" ).addClass("nav-active");
        $( ".nav-li a" ).css("color", "#909090");
        $( "#musicNav a" ).css("color", "black");
      }

      if ($(this).scrollTop() >= servicestop - 60){
        $( ".nav-active" ).removeClass("nav-active");
        $( "#serviceNav" ).addClass("nav-active");
        $( ".nav-li a" ).css("color", "#909090");
        $( "#serviceNav a" ).css("color", "black");
      }

    });
  
    $('#work1Link, #workImg1Search').click(function(){
      $('#workTitleLinks').fadeIn("fast");
      return false;
    });

    $('#closeButton').click(function(){
      $('#workTitleLinks').fadeOut("fast");
      return false;
    });

    //Navigation Scroll
    $(".scroll").click(function(event){
        event.preventDefault();
         //calculate destination place
        var destination = 0;
        if($(this.hash).offset().top > $(document).height()-             
          $(window).height()){
            destination = $(document).height()-$(window).height();
        }else{
              destination = $(this.hash).offset().top;
        }
         //go to destination
        $('html,body').animate({scrollTop:destination - 60},1000,'swing');

    });

    //back to top 
    $('#arrowUp').click(function(){
      $('html,body').animate({scrollTop:0},1000,'swing');
    });

    $('#paginationIcon1').click(function(){
      firstSlider();
      return false;
    });

    $('#paginationIcon2').click(function(){
      secondSlider();
      return false;
    });

    function firstSlider(){
      $('#homepageSlider li:last h1').removeClass("fadeInUp animated");
      $('#homepageSlider li:last h1').addClass("animated fadeOutDown");
      $('#paginationIcon1').removeClass("test-active");
      $('#paginationIcon2').addClass("test-active");
      setTimeout(function(){
        $('#homepageSlider li:first h1').removeClass("fadeOutDown");
        $('#homepageSlider li:first h1').addClass("fadeInUp");
        $('#homepageSlider li:first').css("display","block");
        $('#homepageSlider li:last').css("display","none");
        $('#pagination i:first').removeClass("fa fa-circle-o");
        $('#pagination i:first').addClass("fa fa-circle");
        $('#pagination i:last').removeClass("fa fa-circle");
        $('#pagination i:last').addClass("fa fa-circle-o");
      }, 1000);
    }

    function secondSlider(){
      $('#homepageSlider li:first h1').removeClass("fadeInUp animated");
      $('#homepageSlider li:first h1').addClass("animated fadeOutDown");
      $('#paginationIcon2').removeClass("test-active");
      $('#paginationIcon1').addClass("test-active");
      setTimeout(function(){
        $('#homepageSlider li:last h1').removeClass("fadeOutDown");
        $('#homepageSlider li:last h1').addClass("fadeInUp animated");
        $('#homepageSlider li:first').css("display","none");
        $('#homepageSlider li:last').css("display", "block");
        $('#pagination i:first').removeClass("fa fa-circle");
        $('#pagination i:first').addClass("fa fa-circle-o");
        $('#pagination i:last').removeClass("fa fa-circle-o");
        $('#pagination i:last').addClass("fa fa-circle");
      }, 1000);
    }

    $('#testPaginationIcon1').click(function(){
      testimonialFirstSlider1();
      return false;
    });

    $('#testPaginationIcon2').click(function(){
      testimonialFirstSlider2();
      return false;
    });

    function testimonialFirstSlider1(){
      $('#testimonialSliderUl li:first h1').removeClass("fadeOutDown");
      $('#testimonialSliderUl li:first h1').addClass("fadeInUp");
      $('#testimonialSliderUl li:first').css("display","block");
      $('#testimonialSliderUl li:last').css("display","none");
      $('.test-paginationIcons i:first').removeClass("fa fa-circle-o");
      $('.test-paginationIcons i:first').addClass("fa fa-circle");
      $('.test-paginationIcons i:last').removeClass("fa fa-circle");
      $('.test-paginationIcons i:last').addClass("fa fa-circle-o");
      $('#testPaginationIcon1').removeClass("test-active");
      $('#testPaginationIcon2').addClass("test-active");

    }

    function testimonialFirstSlider2(){
      $('#testimonialSliderUl li:last h1').removeClass("fadeOutDown");
      $('#testimonialSliderUl li:last h1').addClass("fadeInUp animated");
      $('#testimonialSliderUl li:first').css("display","none");
      $('#testimonialSliderUl li:last').css("display", "block");
      $('.test-paginationIcons i:first').removeClass("fa fa-circle");
      $('.test-paginationIcons i:first').addClass("fa fa-circle-o");
      $('.test-paginationIcons i:last').removeClass("fa fa-circle-o");
      $('.test-paginationIcons i:last').addClass("fa fa-circle");
      $('#testPaginationIcon2').removeClass("test-active");
      $('#testPaginationIcon1').addClass("test-active");
    }

    var run = setInterval('autoplay()', 4000);
    function autoplay(){
      $('.test-active').click();
    }



    $('#allworks').click(function(){
      $('.works-nav').css('background', 'none');
      $('#allworks').css('background','#f5f5f5');
      $('.works-images').css('opacity', '1.0');
      $('.white-page').css('opacity', '0');
      return false;

    });

    $('#designWorks').click(function(){
      $('.works-nav').css('background', 'none');
      $('#designWorks').css('background','#f5f5f5');
      $('.works-images').css('opacity', '1.0');
      $('#workImg1').css('opacity', '0.1');
      $('#workImg3').css('opacity', '0.1');
      $('.white-page').css('opacity', '0');
      $('#whitePage1').css('opacity', '0.5');
      $('#whitePage3').css('opacity', '0.5');
      return false;

    });

    $('#illuWorks').click(function(){
      $('.works-nav').css('background', 'none');
      $('#illuWorks').css('background','#f5f5f5');
      $('.works-images').css('opacity', '1.0');
      $('#workImg3').css('opacity', '0.1');
      $('#workImg4').css('opacity', '0.1');
      $('#workImg5').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      $('.white-page').css('opacity', '0');
      $('#whitePage3').css('opacity', '0.5');
      $('#whitePage4').css('opacity', '0.9');
      $('#whitePage5').css('opacity', '0.5');
      $('#whitePage6').css('opacity', '0.5');
      return false;
    });

    $('#marketingWorks').click(function(){
      $('.works-nav').css('background', 'none');
      $('#marketingWorks').css('background','#f5f5f5');
      $('.works-images').css('opacity', '1.0');
      $('#workImg1').css('opacity', '0.1');
      $('#workImg4').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      $('.white-page').css('opacity', '0');
      $('#whitePage1').css('opacity', '0.5');
      $('#whitePage4').css('opacity', '0.9');
      $('#whitePage6').css('opacity', '0.5');
      return false;

    });

    $('#printWorks').click(function(){
      $('.works-nav').css('background', 'none');
      $('#printWorks').css('background','#f5f5f5');
      $('.works-images').css('opacity', '1.0');
      $('#workImg1').css('opacity', '0.1');
      $('#workImg3').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      $('.white-page').css('opacity', '0');
      $('#whitePage1').css('opacity', '0.5');
      $('#whitePage3').css('opacity', '0.5');
      $('#whitePage6').css('opacity', '0.5');
      return false;

    });

    $('#typWorks').click(function(){
      $('.works-nav').css('background', 'none');
      $('#typWorks').css('background','#f5f5f5');
      $('.works-images').css('opacity', '1.0');
      $('#workImg2').css('opacity', '0.1');
      $('#workImg4').css('opacity', '0.1');
      $('#workImg5').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      $('.white-page').css('opacity', '0');
      $('#whitePage2').css('opacity', '0.5');
      $('#whitePage4').css('opacity', '0.9');
      $('#whitePage5').css('opacity', '0.5');
      $('#whitePage6').css('opacity', '0.5');
      return false;

    });

    $('#webWorks').click(function(){
      $('.works-nav').css('background', 'none');
      $('#webWorks').css('background','#f5f5f5');
      $('.works-images').css('opacity', '1.0');
      $('#workImg3').css('opacity', '0.1');
      $('#workImg6').css('opacity', '0.1');
      $('.white-page').css('opacity', '0');
      $('#whitePage3').css('opacity', '0.5');
      $('#whitePage6').css('opacity', '0.5');
      return false;
    });

    window.randomize = function() {
      $('#radialProgress1').attr('data-progress', 84);
      $('#radialProgress2').attr('data-progress', 95);
      $('#radialProgress3').attr('data-progress', 85);
      $('#radialProgress4').attr('data-progress', 80);
    }
    setTimeout(window.randomize, 200);