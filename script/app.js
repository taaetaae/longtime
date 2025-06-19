$(document).ready(function () {

 


  // floor text + coloroverlay

  $('.flobox', this).on({
    mouseover: function () {
      $('.coloroverlay', this).stop().fadeIn();
      $('.flo-text', this).stop().fadeIn();
    },

    mouseout: function () {
      $('.coloroverlay', this).stop().fadeOut();
      $('.flo-text', this).stop().fadeOut();

    },
  })

  // morebutton

  $(".morebtn").on({
    mouseover: function (){
      $(".morebtn").stop().animate({
        width:'20rem',
        backgroundColor: '#FFD000;'
      });

      $(".morebtn img").stop().animate({
       marginLeft: '3rem'
      });

      
    },

    mouseout: function (){
      $(".morebtn").stop().css({
        width:'14rem',
        backgroundColor: '#1A2755;'
      });

      $(".morebtn img").stop().animate({
        marginLeft: '1rem'
       });
    }

    
  })

  $(".morebtn_photo").on({
    mouseover: function (){
      $(".morebtn_photo").stop().animate({
        width:'20rem',
        backgroundColor: '#FFD000;'
      });

      $(".morebtn_photo img").stop().animate({
       marginLeft: '3rem'
      });

      
    },

    mouseout: function (){
      $(".morebtn_photo").stop().css({
        width:'14rem',
      });

      $(".morebtn_photo img").stop().animate({
        marginLeft: '1rem'
       });
    }

    
  })

  
  $(".noticemenu li").click(function() {
    // 모든 li 요소에서 color 클래스를 제거하고 배경색을 초기화
    $(".noticemenu li").removeClass("color").css({
        background: 'none',
        color:'#000'
    });

    // 클릭한 요소에 color 클래스 추가하고 배경색 설정
    $(this).addClass("color").css({
        backgroundColor: '#1A2755',
        color:'#fff'
    });
});




  //
});