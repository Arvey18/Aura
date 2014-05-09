
  var homeheight = $('#homeContainer').height();
  var worktop = $('#ourWorks').offset().top;
  var clienttop = $('#ourClients').offset().top;
  var teamtop = $('#ourTeamContainer').offset().top;
  var musictop = $('#ourMusic').offset().top;
  var servicestop = $('#services').offset().top;
  var top = $('#homeContainer').outerHeight();
  var bottom = $('#ourWorks').outerHeight();

  $("body").queryLoader2({
    percentage : true,
    completeAnimation : "fade",
    onComplete : function(){
      $(".single_content_holder").hide();
      is_complete_loaded = true;
    }
  });

    if($(window).width() > 768){
        $("#homeContainer").css("height",$(window).height());
    }else{
        $("#homeContainer").css("height","100%");
    }
    $(window).resize(function(){
        if($(window).width() > 768){
            $("#homeContainer").css("height",$(window).height());
        }else{
            $("#homeContainer").css("height","100%");
        }
    });

    // Navigation fadeIn Effect and active effect
    $(window).scroll(function() {

     var scrollAmmount = $(window).scrollTop();
     var windowHeight = $(window).height();

    if(scrollAmmount > windowHeight) {
        $( "#navigations" ).fadeIn();
      } else {
        $( "#navigations" ).fadeOut("fast");
      }

      if(scrollAmmount + windowHeight >= $(document).height() - 100) {
            $("#arrowUp").show();
        }else{
            $("#arrowUp").hide();
        }

        // if (scrollAmmount == )

    });
  
    $('#work1Link, #workImg1Search').click(function(){
      $('#workTitleLinks').fadeIn("fast");
      return false;
    });

    $('#closeButton').click(function(){
      $('#workTitleLinks').fadeOut("fast");
      return false;
    });

    $('#workNav').on('click', function(e){
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 1000, function(){
        window.location.hash = hash;
       });
    });

    $('.nav-scroll-60').on('click', function(e){
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
           scrollTop: $(this.hash).offset().top - 60
         }, 1000, function(){

        window.location.hash = hash;

       });

    });


    //back to top 
    $('#arrowUp, #homeNav').click(function(){
      $('html,body').animate({scrollTop:0},1000,'swing');
    });

    $('#paginationIcon1').click(function(){
      firstSlider();
      clearInterval(run);
      run = setInterval('autoplay()', 4000);
      return false;
    });

    $('#paginationIcon2').click(function(){
      secondSlider();
      clearInterval(run);
      run = setInterval('autoplay()', 4000);
      return false;
    });

    function firstSlider(){
      $('#homepageSlider li:last h1').removeClass("fadeInUp animated").addClass("animated fadeOutDown");
      $('#paginationIcon1').removeClass("test-active");
      $('#paginationIcon2').addClass("test-active");
      setTimeout(function(){
        $('#homepageSlider li:first h1').removeClass("fadeOutDown").addClass("fadeInUp");
        $('#homepageSlider li:first').css("display","block");
        $('#homepageSlider li:last').css("display","none");
        $('#pagination i:first').removeClass("fa fa-circle-o").addClass("fa fa-circle");
        $('#pagination i:last').removeClass("fa fa-circle").addClass("fa fa-circle-o");
      }, 1000);
    }

    function secondSlider(){
      $('#homepageSlider li:first h1').removeClass("fadeInUp animated").addClass("animated fadeOutDown");
      $('#paginationIcon2').removeClass("test-active");
      $('#paginationIcon1').addClass("test-active");
      setTimeout(function(){
        $('#homepageSlider li:last h1').removeClass("fadeOutDown").addClass("fadeInUp animated");
        $('#homepageSlider li:first').css("display","none");
        $('#homepageSlider li:last').css("display", "block");
        $('#pagination i:first').removeClass("fa fa-circle").addClass("fa fa-circle-o");
        $('#pagination i:last').removeClass("fa fa-circle-o").addClass("fa fa-circle");
      }, 1000);
    }
      
    // function homeslider(){


    // }

    // $('.paginationIcons').click(function(){
    //   $(this).removeClass("test-active");
    //   $('.paginationIcons').addClass("test-active");
    // });

    $('#testPaginationIcon1').click(function(){
      testimonialFirstSlider1();
      clearInterval(run);
      run = setInterval('autoplay()', 4000);
      return false;
    });

    $('#testPaginationIcon2').click(function(){
      testimonialFirstSlider2();
      clearInterval(run);
      run = setInterval('autoplay()', 4000);
       return false;
    });

    function testimonialFirstSlider1(){
      $('#testimonialSliderUl li:first').css("display","block");
      $('#testimonialSliderUl li:last').css("display","none");
      $('.test-paginationIcons i:first').removeClass("fa fa-circle-o").addClass("fa fa-circle");
      $('.test-paginationIcons i:last').removeClass("fa fa-circle").addClass("fa fa-circle-o");
      $('#testPaginationIcon1').removeClass("test-active");
      $('#testPaginationIcon2').addClass("test-active");
    }

    function testimonialFirstSlider2(){
      $('#testimonialSliderUl li:first').css("display","none");
      $('#testimonialSliderUl li:last').css("display", "block");
      $('.test-paginationIcons i:first').removeClass("fa fa-circle").addClass("fa fa-circle-o");
      $('.test-paginationIcons i:last').removeClass("fa fa-circle-o").addClass("fa fa-circle");
      $('#testPaginationIcon2').removeClass("test-active");
      $('#testPaginationIcon1').addClass("test-active");
    }

    var run = setInterval('autoplay()', 4000);
    function autoplay(){
      $('.test-active').click();
    }


    $('.works-nav').click(function(){
      $('.works-nav').css('background', 'none');
      $(this).css('background', '#f5f5f5');

      $('.works-images').css('opacity', '1');
      var cat = $(this).data('category');
      $('.' + cat).css('opacity', '0.1');

      return false;

      if ($('#allworks').click()){
        $('.works-images').css('opacity', '1.0');
        $('.white-page').css('opacity', '0');
      }

    });
    
   


  $('.client-logo').waypoint(function(event, direction) {
    $(this).addClass("animated fadeIn").css("visibility", "visible");

  }, {
     offset: function() {
      var clientoffset = $(this).data('scoffset');
      return $.waypoints('viewportHeight') - $(this).outerHeight() - clientoffset;
    }
  });

  $('.page-builder-monitor').waypoint(function(event, direction) {
    $(this).addClass("animated fadeInLeft").css("visibility", "visible");

  }, {
     offset: function() {
      var clientoffset = $(this).data('scoffset');
      return $.waypoints('viewportHeight') - $(this).outerHeight() - clientoffset;
    }
  });

  $('.page-builder-des').waypoint(function(event, direction) {
    $(this).addClass("animated fadeInRight").css("visibility", "visible");

  }, {
     offset: function() {
      var clientoffset = $(this).data('scoffset');
      return $.waypoints('viewportHeight') - $(this).outerHeight() - clientoffset;
    }
  });

  $('.team-img-fadeIn').waypoint(function(event, direction) {
    $(this).addClass("animated fadeInUp").css("visibility", "visible");

  }, {
     offset: function() {
      var clientoffset = $(this).data('scoffset');
      return $.waypoints('viewportHeight') - $(this).outerHeight() - clientoffset;
    }
  });

  $('.service-fadeIn').waypoint(function(event, direction) {
    $(this).addClass("animated fadeInUp").css("visibility", "visible");

  }, {
     offset: function() {
      var clientoffset = $(this).data('scoffset');
      return $.waypoints('viewportHeight') - $(this).outerHeight() - clientoffset;
    }
  });

  $('.skill-container').waypoint(function(event, direction) {
    $(this).css("visibility", "visible");
     window.randomize = function() {
      $('#radialProgress1').attr('data-progress', 84);
      $('#radialProgress2').attr('data-progress', 95);
      $('#radialProgress3').attr('data-progress', 85);
      $('#radialProgress4').attr('data-progress', 80);
    }
    setTimeout(window.randomize, 200);

  }, {
     offset: function() {
      var clientoffset = $(this).data('scoffset');
      return $.waypoints('viewportHeight') - $(this).outerHeight() - clientoffset;
    }
  });

  $('.buy-layer-slide').waypoint(function(event, direction) {
    $(this).addClass("animated slideInLeft").css("visibility", "visible");

  }, {
     offset: function() {
      var clientoffset = $(this).data('scoffset');
      return $.waypoints('viewportHeight') - $(this).outerHeight() - clientoffset;
    }
  });

