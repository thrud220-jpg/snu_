$(document).ready(function(){//실행시작

  var page = $("#fullpage").fullpage({

    navigation: true,
    navigationTooltips: ['서울대 동물병원', '진료원칙', '진료안내', '진료과목', '진료예약' ,'모집공고', '오시는 길'],
    navigationPosition: 'right',
    showActiveTooltip: true,

     onLeave: function (origin, destination, nextIndex, direction) {
        if (destination == 2 |destination == 3| destination == 4 | destination == 5 | destination == 6 | destination == 6 |destination == 7) {
            $("header, #fp-nav").addClass("active");
        } else {
            $("header, #fp-nav").removeClass("active");
        }

        if (destination == 3 | destination == 4 ) {
            $("#fp-nav").removeClass("active");
        }

      }

      

        
      });



  /*gnb-wrap*/



    let ww = $(window).width();

    //  기본동작
    if (ww <= 800) {
      $(".depth2").hide();

      $(".gnb > li").click(function(){
        if($(this).children(".depth2").css("display") == "none"){

        $(this).children(".depth2").slideDown("slow");
        $(this).siblings().children(".depth2").slideUp("slow");

      }else{
      
        $(this).children(".depth2").slideUp("slow");
      }
    });

      }else{
        $(".depth2").show();
      } 

    // 리사이즈 동작
    $(window).on('resize', function() {
    let ww = $(window).width();
    
    if (ww <= 800) {
      
      $(".depth2").hide();

      $(".gnb > li").off('click').on('click', function() {
     
          if($(this).children(".depth2").css("display") == "none"){

          $(this).children(".depth2").slideDown("slow");
          $(this).siblings().children(".depth2").slideUp("slow");

        }else{
          
          $(this).children(".depth2").slideUp("slow");
        }

      });
    }else{
      
      $(".depth2").show();
      $(".gnb > li").off('click');

    }
    }).trigger('resize');

     /*ham*/
  $(".gnb-wrap").hide();

  $(".ham").click(function(){
    $(".gnb-wrap").fadeIn();
  });

  $(".gnb-close").click(function(){
    $(".gnb-wrap").fadeOut();
  });

    /*treatment*/
    
    const treat_list = new Swiper(".treat-list", {

      loop:true,
      speed:6000,
    
      autoplay:{
      delay: 0,
      disableOnInteraction: false,
    },

    centeredSlides: true, 

    pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
          clickable: true,
        },
        
    breakpoints: {
      0: {
          slidesPerView: 1.5,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
      },

      1200:{
        slidesPerView: 4,
        spaceBetween: 20,
      },
    
    },


    });

    /*.breadcrumbs*/ 
    $(".breadcrumbs ul").hide();

    $(".breadcrumbs .hi").click(function(){
      $(".breadcrumbs ul").stop().slideToggle();
      $(this).stop().toggleClass("active");
    });

    /*footer*/
    $(".f-right ul").hide();

    $(".f-right").click(function(){
      $(".f-right span").stop().toggleClass("active");
      $(".f-right ul").stop().slideToggle();
    });


}); //실행 끝