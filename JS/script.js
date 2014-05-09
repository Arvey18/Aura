function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function center_video(el){
    var playerBox = el;
    var win = {};
    var el = jQuery(window);

    win.width = el.width();
    win.height = el.height();

    var margin = 24;
    var vid = {};
    vid.width = win.width + ((win.width * margin) / 100);
    vid.height = Math.ceil((9 * win.width) / 16);
    vid.marginTop = -((vid.height - win.height) / 2);
    vid.marginLeft = -((win.width * (margin / 2)) / 100);

    if (vid.height < win.height) {
        vid.height = win.height + ((win.height * margin) / 100);
        vid.width = Math.floor((16 * win.height) / 9);
        vid.marginTop = -((win.height * (margin / 2)) / 100);
        vid.marginLeft = -((vid.width - win.width) / 2);
    }
    playerBox.css({width: vid.width, height: vid.height, marginTop: vid.marginTop, marginLeft: vid.marginLeft});
}
var setup_containers;
var is_complete_loaded = false;
var is_project_open = false;
jQuery(document).ready(function($){
	
	/*Add Clear after six-th box*/
	$(".all_boxes_container > div:nth-child(6)").after("<br style='clear:both'/>");
	/*Add Clear after six-th box*/
	
    if(Modernizr.touch){
        $("body").addClass("touch");
    }

    $("audio,video").mediaelementplayer({
        playlist: true,
        features: ['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'loop', 'shuffle', 'playlist', 'current', 'progress', 'duration', 'volume']
    });
    $("audio,video").on("play",function(){
        var filename = this.player.media.src.replace(/^.*[\\\/]/, '')
        $(this).parent().parent().parent().parent().parent().find(".track_title").text(filename);
    })

    /*Make Headers Full Height*/
    if($(window).width() > 768){
        $(".full_width_relative_container").css("height",$(window).height());
    }else{
        $(".full_width_relative_container").css("height","100%");
    }
    $(window).resize(function(){
        if($(window).width() > 768){
            $(".full_width_relative_container").css("height",$(window).height());
        }else{
            $(".full_width_relative_container").css("height","100%");
        }
    });
    /*Make Headers Full Height*/

    /*Progres bar on window load*/
    $("body").queryLoader2({
        percentage : true,
        completeAnimation : "fade",
        onComplete : function(){
            $(".single_content_holder").hide();
            is_complete_loaded = true;
        }
    });
    //$(".single_content_holder").hide();
    /*Progres bar on window load*/

    $(window).resize(function(){
        autoheight_typography_siders();
    });

    $(window).load(function(){
        /*Center Client Images*/
        $("div.clients_cont").each(function(){
            $(this).find(".clients_logo_container").each(function(){
                this_img = $(this);
                var parent_height = parseInt(this_img.parent().height() / 2);
                var this_img_height = parseInt(this_img.height() / 2);
                this_img.css("margin-top",(parent_height - this_img_height) + "px");
            });
        });
        /*Center Client Images*/
    });
    /*Center Header Slogan*/
        $(".header_slogan").css("margin-top",Math.abs(($(".header_slogan").prev().outerHeight()/2-$(".header_slogan").outerHeight()/2))+"px");
    /*Center Header Slogan*/

    /*Typograhpy Slider*/
    var animate_interval = 1000;
    var autoheight_typography_siders = function(){
        $(".typography_slider").each(function(){
            /*Display all slides*/
            $(this).find("h1.capture-tittle-center").addClass("animated");
            $(this).find("a.btn-transparent").addClass("animated");
            var element_height = [];
            $(this).find('li').each(function(el){
                element_height.push(parseInt(jQuery(this).height()));
            });
            element_height = Math.max.apply(null,element_height);
            $(this).find("ul").css("height",element_height);
            $(this).find("h1.capture-tittle-center").removeClass("animated");
            $(this).find("a.btn-transparent").removeClass("animated");
            /*Display Active Elements*/
            var active_slide = $(this).find("li.active");
            var active_slide_heading = active_slide.find("h1.capture-tittle-center");
            var active_button = active_slide.find("a.btn-transparent");
            active_slide_heading.removeClass(active_slide_heading.data("out")).addClass(active_slide_heading.data("in")).addClass("animated");
            active_button.removeClass(active_button.data("out")).addClass(active_button.data("in")).addClass("animated");
        });
    };
    autoheight_typography_siders();

    var typography_slider_clicked = false;
    $("div.capture-slider-pagination a").click(function(e){
        e.preventDefault();
        change_slide_typography_slider($(this));
    });

    function change_slide_typography_slider(el){
        if(!typography_slider_clicked){
            typography_slider_clicked = true;
            var parent = el.parent().parent();
            var active_slide = parent.find("li.active");
            var current_slide = parent.find("li").eq(el.index());
            var this_element = el;
            /*Anime In Active Slide*/
            var active_slide_heading = active_slide.find("h1.capture-tittle-center");
            var active_button = active_slide.find("a.btn-transparent");
            active_slide_heading.removeClass(active_slide_heading.data("in")).addClass(active_slide_heading.data("out")).addClass("animated");
            active_button.removeClass(active_button.data("in")).addClass(active_button.data("out")).addClass("animated");
            /*Animate In Curent Slide*/
            window.setTimeout(function(){
                var current_slide_heading = current_slide.find("h1.capture-tittle-center");
                var current_button = current_slide.find(".btn-transparent");
                current_slide_heading.removeClass(current_slide_heading.data("out")).addClass(current_slide_heading.data("in")).addClass("animated");
                current_button.removeClass(current_button.data("out")).addClass(current_button.data("in")).addClass("animated");
                active_slide_heading.removeClass("animated");
                active_button.removeClass("animated");
                active_slide.removeClass("active");
                current_slide.addClass("active");
                parent.find(".pagination_active").removeClass("pagination_active");
                parent.find(".fa-circle").removeClass("fa-circle").addClass("fa-circle-o");
                this_element.find("div").addClass("pagination_active");
                this_element.find(".fa").removeClass("fa-circle-o").addClass("fa-circle");
                typography_slider_clicked = false;
            },animate_interval);
        }
    }
    /*Typograhpy Slider*/

    /*Testimonials Slider*/
    /*Show first element*/
    $(".testimonials_message").each(function(){
        var active_slide = $(this).find("li.active");
        active_slide.find("p.quote").addClass("animated");
        active_slide.find("div:eq(0)").addClass("animated");
    });

    $("div.testimonials_message div.testimonials_pagination a").click(function(e){
        e.preventDefault();
        next_testimonial($(this));
    });

    function next_testimonial(el){
        var parent = el.parent().parent();
        var active_slide = parent.find("li.active");
        var current_slide = parent.find("li").eq(el.index());
        var this_element = el;

        active_slide.find(".animated").removeClass("animated");
        current_slide.find("p.quote").addClass("animated");
        current_slide.find("div:eq(0)").addClass("animated");
        active_slide.removeClass("active");
        current_slide.addClass("active");
        parent.find(".pagination_active").removeClass("pagination_active");
        parent.find(".fa-circle").removeClass("fa-circle").addClass("fa-circle-o");
        this_element.find("div").addClass("pagination_active");
        this_element.find(".fa").removeClass("fa-circle-o").addClass("fa-circle");
    }
    /*Testimonials Slider*/

    /*Hook Up Twitter*/
    $(".tweet").each(function(){
        $(this).html(twttr.txt.autoLink($(this).html()));
    });

    var tweets_delay = 4000;

    function animate_tweets(){
        $("ul.twitter_feed").each(function(){
            var cur_tweet = $(this).find(".animated");
            var next_tweet = cur_tweet.next();
            if(!next_tweet.length){
                next_tweet = $(this).find("li:eq(0)");
            }
            cur_tweet.removeClass("animated");
            next_tweet.addClass("animated");
        });
        window.setTimeout(function(){animate_tweets();},tweets_delay);
    }

    window.setTimeout(function(){animate_tweets();},tweets_delay);
    /*Hook Up Twitter*/

    /*Skrollr*/
    if(!Modernizr.touch){
        var s = skrollr.init({
         forceHeight : false
         });
    }
    /*Skrollr*/

    $("a.cat_filter").on("click",function(e){
        e.preventDefault();
        var cat_filter = jQuery(this).data("filter");
        $("div.categories-p a.active").removeClass("active");
        $(this).addClass("active");
        //$(".projects").mixitup("filter",cat_filter);
        $(".projects").find(".article").removeClass("disabled");
        $(".projects").find(".article:not(."+cat_filter+")").addClass("disabled");
        $(this).parent().parent().parent().parent().find("a.load_more").data("filter",cat_filter);
    });
    /*Mixitup*/

    /*Load More Projects*/
    $("a.load_more").click(function(e){
        e.preventDefault();
        var this_element = $(this);
        var exclude_cats = $(this).data("exclude_cats");
        var page = parseInt($(this).data("page"));
        var num_of_posts = $(this).data("num-of-posts");
        var ajax_data = {
            action : "um_get_projects",
            um_num_of_posts : num_of_posts,
            um_paged : page,
            um_cats : exclude_cats
        };
        $.post(um_ajaxurl,ajax_data,function(data){
            if(data){
                this_element.parent().parent().find(".projects").append(data);
                this_element.parent().parent().find(".projects").find(".article:not(."+this_element.data("filter")+")").addClass("disabled");
                this_element.data("page",page +1);
            }else{
                this_element.fadeOut("normal");
            }
        });
    });
    /*Load More Projects*/

    /*Projects Slider Navigation*/
    $("body").on("click",".slider-arrows .next-slide",function(e){
        e.preventDefault();
        var parent = $(this).parent().parent();
        var cur_slide = parent.find("li.animated");
        var next_slide = cur_slide.next();
        if(!next_slide.length){
            next_slide = parent.find("li:eq(0)");
        }
        cur_slide.removeClass("animated");
        next_slide.addClass("animated");
    });

    $("body").on("click",".slider-arrows .prev-slide",function(e){
        e.preventDefault();
        var parent = $(this).parent().parent();
        var cur_slide = parent.find("li.animated");
        var next_slide = cur_slide.prev();
        if(!next_slide.length){
            next_slide = parent.find("li:last");
        }
        cur_slide.removeClass("animated");
        next_slide.addClass("animated");
    });
    /*Projects Slider Navigation*/

    /*Validate and pass ajax contact form*/
    $("form.contact_form").on("submit",function(){
        var url = $(this).attr("action");
        var name = $(this).find("#name");
        var email = $(this).find("#email");
        var message = $(this).find("#message");
        var layoutcount = $(this).find("#layout_count");
        var this_el = $(this);
        var return_statemenet = true;
        if(!name.val()){
            return_statemenet = false;
            name.addClass("error");
        }
        if(!email.val() || !validateEmail(email.val())){
            return_statemenet = false;
            email.addClass("error");
        }
        if(!message.val()){
            return_statemenet = false;
            message.addClass("error");
        }
        if(return_statemenet){
            var ajax_data = {
                um_name : name.val(),
                um_email : email.val(),
                um_message : message.val(),
                um_layoutcount : layoutcount.val()
            };
            $.post(url,ajax_data,function(data){
                this_el.fadeOut("fast");
                this_el.next().fadeIn("fast");
            });
        }
        return false;
    });

    $(".contact_form *").click(function(){
        $(this).removeClass("error");
    });
    /*Validate and pass ajax contact form*/

    /*Construct Google Maps*/
    $(".google_map").each(function(){
        var this_element = $(this);
        var lat = parseFloat(this_element.data("lat"));
        var long = parseFloat(this_element.data("long"));
        var zoom = parseFloat(this_element.data("zoom"));
        var address = this_element.data("address");

        var map;
        var brooklyn = new google.maps.LatLng(lat, long);

        var stylez = [
            {
                featureType: "all",
                elementType: "all",
                stylers: [
                    { saturation: -100 }
                ]
            }
        ];

        var mapOptions = {
            zoom: zoom,
            center: brooklyn,
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: [
                    google.maps.MapTypeId.ROADMAP, 'tehgrayz']
            },
            scrollwheel: false
        };

        map = new google.maps.Map(this, mapOptions);

        var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
        map.mapTypes.set('tehgrayz', mapType);
        map.setMapTypeId('tehgrayz');
        marker = new google.maps.Marker({
            title : address,
            position: brooklyn,
            map: map
        });
    });
    /*Construct Google Maps*/

    /*Display Project Container*/
    $("body1").on("click",".article",function(e){
        e.preventDefault();
        var this_element = $(this);
        var project_container = $(this).parent().find(".project_content_holder").stop().hide().clone();
        if(!project_container.length){
            project_container = $("<div class='project_content_holder col-xs-12'></div>");
        }
        this_element.parent().find(".project_content_holder").remove();
        /*If it is the first element*/
        if(this_element.is(".article:nth-child(3n+1)")){
            if(this_element.next().next().length){
                this_element.next().next().after(project_container);
            }else if(this_element.next().length){
                this_element.next().after(project_container);
            }else{
                this_element.after(project_container);
            }
        }
        /*If is is the middle element*/
        if(this_element.is(".article:nth-child(3n-1)")){
            if(this_element.next().length){
                this_element.next().after(project_container);
            }else{
                this_element.after(project_container);
            }
        }
        /*If it is last element*/
        if(this_element.is(".article:nth-child(3n+0)")){
            this_element.after(project_container);
        }
        /*Display Project Content Under Each Project*/
        var url = this_element.data("url");
        $.post(url,{ajax_req : true},function(data){
            project_container.html(data);
            project_container.fadeIn("fast");
        });
    });
    /*Display Project Container*/


    /*Menu Scroll To*/
    var doing_normal_scroll = false;
    $(".dynamic-item a,.box_type_link a").click(function(e){
        var cur_hash = $(this).attr("href").split("#");
        var this_element = $(this);
        cur_hash = cur_hash[cur_hash.length-1];
        if($('#'+cur_hash).length){
            e.preventDefault();
            doing_normal_scroll = true;
            $("body").scrollTo( $('#'+cur_hash),{
                duration : 800,
                onAfter : function(){
                    window.location.hash = cur_hash;
                    $(".nav").find("li.active").removeClass("active");
                    this_element.parent().addClass("active");
                    doing_normal_scroll = false;
                }
            });
        }
    });

    /*If this is dynamic page template and current page menu item is clicked just go to top*/
    $("body.page-template-template-dynamic-php .current_page_item a").click(function(e){
        e.preventDefault();
        var this_element = $(this);
        $(".nav").find("li.active").removeClass("active");
        this_element.parent().addClass("active");
        $("body").scrollTo(0,800);
    });

    /*$(".inner_content > div").appear(function(){
        var id = $(this).attr("id");return false;
        var this_element = $("ul.nav").find("a[href$='"+id+"']");
        if(id && this_element.length && !doing_normal_scroll){
            $(".nav").find("li.active").removeClass("active");
            this_element.parent().addClass("active");
            var cur_hash = this_element.attr("href").split("#");;
            cur_hash = cur_hash[cur_hash.length-1];
            var scrollV = document.body.scrollTop;
            var scrollH = document.body.scrollLeft;
            location.hash = cur_hash;
            document.body.scrollTop = scrollV;
            document.body.scrollLeft = scrollH;
        }
    },{one:false});*/
    $('.inner_content > div:not(.um_clearing)').waypoint(function(direction) {
        if( direction === 'down' ){
            var id = $(this).attr("id");
            var this_element = $(".navbar-fixed-top ul.nav").find("a[href$='"+id+"']");
            if(id && this_element.length && !doing_normal_scroll){
                $(".navbar-fixed-top ul.nav").find("li.active").removeClass("active");
                this_element.parent().addClass("active");
            }
        }
    },{ offset: '100' , continuous : false });

    $('.inner_content > div:not(.um_clearing)').waypoint(function(direction) {
        if( direction === 'up' ){
            var id = $(this).attr("id");
            var this_element = $(".navbar-fixed-top ul.nav").find("a[href$='"+id+"']");
            if(id && this_element.length && !doing_normal_scroll){
                $(".navbar-fixed-top ul.nav").find("li.active").removeClass("active");
                this_element.parent().addClass("active");
            }
        }
    },{ offset: '0' , continuous : false });
    /*Menu Scroll To*/

    /*ScrollTop*/
    $("a.go_top").click(function(e){
        e.preventDefault();
        $("body").scrollTo(0,800);
    });
    /*ScrollTop*/

    /*Progress Bars
     $(".chart").easyPieChart({
     animate: 2000,
     scaleColor: false,
     lineWidth: 5,
     lineCap: 'square',
     size: 135,
     trackColor: '#cac8c3',
     barColor: '#fff'
     });
     Progress Bars*/

    /*Waypoints Effects*/
    $(".typography_slider,.testimonials_cont").appear(function(){
        var this_element = $(this);
        this_element.find(".pagination_active").parent().next().trigger("click");
    },{accY: -300});

    $(".services-list").each(function(){
        var offset = $(this).data("scoffset");
        $(this).appear(function(){
            $(this).addClass("animated fadeIn");
        },{accY: -parseInt(offset)});
    });

    $(".little_box").each(function(){
        var offset = $(this).data("scoffset");
        $(this).appear(function(){
            $(this).find(".little_box-text").addClass("animated fadeInRight");
            $(this).find(".little_box-text a").addClass("animated fadeInLeft");
        },{accY: -parseInt(offset)});
    });

    $(".clients_cont").each(function(){
        var offset = $(this).data("scoffset");
        $(this).appear(function(){
            $(this).find(".clients_logo_container").addClass("animated fadeIn");
        },{accY: -parseInt(offset)});
    });

    $(".skills_cont").each(function(){
        var offset = $(this).data("scoffset");
        $(this).appear(function(){
            $(this).find(".chart").show();
            $(this).find(".chart").easyPieChart({
                animate: 2000,
                scaleColor: false,
                lineWidth: 5,
                lineCap: 'square',
                size: 135,
                trackColor: '#cac8c3',
                barColor: '#fff'
            });
        },{accY: -parseInt(offset)});
    });

    $(".team_container").each(function(){
        var offset = $(this).data("scoffset");
        $(".team_container").appear(function(){
            $(this).find(".team_photo_container").addClass("animated fadeIn");
        },{accY: -parseInt(offset)});
    });
    /*Waypoints Effects*/

    /*Handle Menu On Scroll*/
    $(window).scroll(function(e){
        var navbar = $("div.navbar-fixed-top");
        var scroll_ammount = $(window).scrollTop();
        var window_height = $(window).height();
        if(scroll_ammount > window_height){
            navbar.addClass("menu_visible");
            if(!Modernizr.touch){
                $(".js_video").hide();
            }
        }else{
            navbar.removeClass("menu_visible");
            $(".js_video").show();
        }

        if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            $("a.go_top").show();
        }else{
            $("a.go_top").hide();
        }
    });
    $('body').on('wheel.modal mousewheel.modal', function () {
        if($(".single_content_holder").is(":visible") || !is_complete_loaded){
            return false;
        }
    });
    /*Handle Menu On Scroll*/

    /*Display Project Single Page*/
    $("body").on("click",".article a.open_project",function(e){
		if(!Modernizr.touch){
			e.preventDefault();
			var url = $(this).attr("href");
			$.post(url,{ ajax_req : false},function(data){
				$("div.single_content_holder").html(data);
				$("div.single_content_holder").fadeIn("fast");
			});
		}
    });

    $("body").on("click","a.close_project",function(e){
        e.preventDefault();
        $("div.single_content_holder").fadeOut("fast");
        $("div.single_content_holder").html("");
        $(".nicescroll-rails").remove();
    });
    /*Display Project Single Page*/

    /*AutoSlides*/

        /*Typography Slider*/
        window.setTimeout(function(){
            auto_slide_typography_slider();
        },8000);
        function auto_slide_typography_slider(){
            $(".typography_slider:not(:hover)").each(function(){
                var active_li = $(this).find("div.pagination_active").parent();
                var next_li = active_li.next();
                if(!next_li.length){
                    next_li = $(this).find(".capture-slider-pagination a:eq(0)");
                }
                change_slide_typography_slider(next_li);
            });
            window.setTimeout(function(){
                auto_slide_typography_slider();
            },8000);
        }
        /*Typography Slider*/

        /*Testimonials*/
        window.setTimeout(function(){
            auto_slide_testimonial();
        },8000);
        function auto_slide_testimonial(){
            $(".testimonials_message:not(:hover)").each(function(){
                var active_li = $(this).find("div.pagination_active").parent();
                var next_li = active_li.next();
                if(!next_li.length){
                    next_li = $(this).find(".testimonials_pagination a:eq(0)");
                }
                next_testimonial(next_li);
            });
            window.setTimeout(function(){
                auto_slide_testimonial();
            },8000);
        }
        /*Testimonials*/

    /*AutoSlides*/

    /*Vimeo API*/

    $(window).load(function(){

        /*Parallax*/
        if(!Modernizr.touch){
            $(".parallax_image_cont").parallax("50%",0.6,true);
            //$(".music_container").parallax("50%",0.6,false);
            //$(".contact_cont").parallax("50%",0.6,true);
        }
        /*Parallax*/

        /*Vimeo API*/
        $("iframe.vimeo").each(function(){
            var f = $(this);
            url = f.attr('src').split('?')[0];
            if (window.addEventListener) {
                window.addEventListener('message', onMessageReceived, false);
            }
            else {
                window.attachEvent('onmessage', onMessageReceived, false);
            }
            function post(action, value,frame) {
                var data = { method: action };

                if (value) {
                    data.value = value;
                }

                frame[0].contentWindow.postMessage(JSON.stringify(data), url);
            }
            function onMessageReceived(e) {
                var data = JSON.parse(e.data);

                switch (data.event) {
                    case 'ready':
                        onReady();
                        break;
                }
            }
            function onReady() {
                post("play","",f);
                post("setLoop","1",f);
                post("setVolume","0",f);
                $("#qLoverlay").fadeOut("fast",function(){
                    $(this).remove();
                    $(".single_content_holder").hide();
                    is_complete_loaded = true;
                });
            }
            onReady();
        });

        /*Youtube API*/
        $(".youtube_player").each(function(){
            var vid = $(this).data("vid");
            var id = $(this).attr("id");
            var height = $(this).data("height");
            var player = new YT.Player(id, {
                height: height+'px',
                width: '100%',
                videoId: vid,
                playerVars: { 'modestbranding' : 0, 'disablekb' : 1, 'autoplay': 1, 'controls': 0, 'playlist': vid, 'loop': 1, 'showinfo': 0, 'wmode': 'transparent' , 'iv_load_policy' : '3'},
                events: {
                    'onReady': onPlayerReady
                }
            });
        });

        function onPlayerReady(event) {
            event.target.setVolume(parseFloat(0));
            center_video(jQuery(".js_video iframe"));
            $("#qLoverlay").fadeOut("fast",function(){
                $(this).remove();
                $(".single_content_holder").hide();
                is_complete_loaded = true;
            });
        }
        /*Youtube API*/
        center_video(jQuery(".js_video iframe"));
        $(window).resize(function(){
            center_video(jQuery(".js_video iframe"));
        });
        $(".mejs-hide-playlist").trigger("click");
    });
});

jQuery.extend(jQuery.expr[':'],{
    inView: function(a) {
        var st = (document.documentElement.scrollTop || document.body.scrollTop),
            ot = jQuery(a).offset().top,
            wh = (window.innerHeight && window.innerHeight < jQuery(window).height()) ? window.innerHeight : jQuery(window).height();
        return ot > st && (jQuery(a).height() + ot) < (st + wh);
    }
});

jQuery(document).ajaxSend(function(event, jqxhr, settings) {
    show_loader();
}).ajaxComplete(function(event, jqxhr, settings) {
        hide_loader();
    })

function show_loader(){
    jQuery(".loader").stop(true,true).fadeIn("fast");
}

function hide_loader(){
    jQuery(".loader").stop(true,true).fadeOut("fast");
}