
$(document).ready(function($){
    /*NAVBAR*/
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");

        }
    });



    /*----Video Youtube----*/
    const videoSrc = $('#player-1').attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $('#player-1').attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($('#player-1').attr("src")==''){
                $('#player-1').attr("src",videoSrc);
            }
        }
    });



    /*-----*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin :0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               
            },
            600:{
                items:2,
               
            },
            1000:{
                items:3,
               
            }
        }
    });


    /*--Screenshots carousel--*/
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               
            },
            600:{
                items:2,
               
            },
            1000:{
                items:3,
               
            }
        }
    });
    

      /*-- Testimonial--*/
      $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        //autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,    
            },
            600:{
                items:2,       
            },
            1000:{
                items:1,
               
            }
        }
    });

      /*-- TEAM JAGOAN--*/
      $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,    
            },
            600:{
                items:2,       
            },
            1000:{
                items:3,
               
            }
        }
    });
    /*------Page Scrolling------*/
    $.scrollIt({
        topOffset: -50
    });

    /*--------Navbar Collapse------*/

    $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
        // "a:not([data-toggle])" - to avoid issues caused
        // when you have dropdown inside navbar
        navMain.on("click", "a:not([data-toggle])", null, function () {
            navMain.collapse('hide');
        });
    });


    /*---PORTOFOLIO-----*/
    const mixer = mixitup('.portofolio-container', {
        selectors: {
            target: '.portofolio-item'
        },
        animation: {
            duration: 400
        }
    });

    const linkPortofolio = document.querySelectorAll('.portofolio_item')

    function activePortofolio(){
        if(linkPortofolio){
            linkPortofolio.forEach(l => l.classList.remove('active-portofolio'))
            this.classList.add('active-portofolio')
        }
    }
    linkPortofolio.forEach(l => l.addEventListener ('click', activePortofolio) )
    
});