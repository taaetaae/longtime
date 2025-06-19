$(function(){
    $(".menu>li").on({
        mouseover:function(){
            $(".subm li",this).stop().slideDown();
        },

        mouseout:function(){
            $(".subm li",this).stop().slideUp();
        }
    });

      // header button


  $(".h_btn").click(function(){

    $(".h_btn").toggleClass("x")

    if ($(".h_btn").hasClass("x")) {
      $(".mbtn").stop().css({
        opacity:'0'
      });
      $(".xbtn").stop().css({
        opacity:'1'
      });
      $(".sitemap").stop().fadeIn();
      $(".menu").stop().css({
        opacity:'0'
      });

      $("body").css({
        overflowY: 'hidden'
      });

      $(".quick,.top").hide();
    
    } else {
      $(".mbtn").stop().css({
        opacity:'1'
      });
      $(".xbtn").stop().css({
        opacity:'0'
      });
      $(".sitemap").stop().fadeOut();
      $(".menu").stop().css({
        opacity:'1'
      });
      $("body").css({
        overflowY: 'visible'
      });

      $(".quick,.top").show();

   
    }

  });

  // 태블릿 사이즈에서 마우스오버->클릭으로 바뀌게 

  
  $(".sitet").click(function(){

    $(".sitet").toggleClass("subs")

    if($(".sitet").hasClass("subs")) {
      $(".subsite",this).stop().slideDown();
    } else {

      $(".subsite",this).stop().slideUp();
    }
   
});


  


  //  menu 1280 태블릿 사이즈에서 숨기기

  toggleBoxVisibility();

  // 창 크기 변경 시마다 박스 상태 갱신
  $(window).resize(function() {
      toggleBoxVisibility();
  });

  function toggleBoxVisibility() {
      if ($(window).width() < 1280) {
          $('header .h_inner .menu').hide();
      } else {
          $('header .h_inner .menu').css({
            display:'flex'
          }).show();
      
      }
  }


  $(".qbtn").click(function(){

    $(".qbtn").toggleClass("minus")

    if ($(".qbtn").hasClass("minus")) {
      $(".minus").show();
      $(".plus").hide();
      $(".quick").css({
        height: 'auto'
      })
      $(".quick .qbox").stop().slideDown();
      
    
    } else {
      $(".plus").show();
      $(".minus").hide();
      $(".quick").css({
        height: '4rem'
      })
      $(".quick .qbox").stop().slideUp();
    
    }

  });

    //  submenu 타이틀 지나면 배경색 넣기

    window.addEventListener('scroll', function() {
      let menu = document.querySelector('.subm');
      if (window.scrollY > 900) { // Change 100 to the height you want
          $(".subm").css({
            backgroundColor:'#fff'
          });
      } else {
        $(".subm").css({
          background:'none'
        });
      }

  });

  // 900px 스크롤 아래로 내려가면 quick,top버튼 보이게

  window.addEventListener('scroll', function() {

  let topbtn = document.querySelector('.quick,.top');
  if (window.scrollY < 900) { // Change 100 to the height you want
      $(".quick,.top").fadeOut(),200;
  } else {
    $(".quick,.top").fadeIn(),200;
  }

});

// top 버튼 클릭시 맨 위로 올라가게

$('.top').click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'smooth'); // 부드럽게 스크롤
});

// 메뉴 마우스오버하면 내려오고, 올라가게

  $('.ss li').on({

    mouseover: function () {
        $('.ssub', this).stop().slideDown();
    },

    mouseout: function () {
        $('.ssub', this).stop().slideUp();
    },
});



    //
    });



