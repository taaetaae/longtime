$(document).ready(function () {



    $(".about_slides").on({

        mouseover: function () {
            $(".about_slides>p", this).stop().fadeIn();
        },

        mouseout: function () {
            $(".about_slides>p", this).stop().fadeOut();
        },

    });

    $(".bitab").click(function () {

        $(".bitab").css({
            borderBottom: '4px solid #1A2755',
            fontWeight: '900'
        });

        $(".gridtab").css({
            borderBottom: '0',
            fontWeight: '500'

        });

        $(".colortab").css({
            borderBottom: '0',
            fontWeight: '500'
        });

        $(".bgtab").css({
            borderBottom: '0',
            fontWeight: '500'
        });

        $(".bi").show();
        $(".grid").hide();
        $(".color").hide();
        $(".bg").hide();

    });

    //모바일

    // $(window).resize(function () {
    //     toggleBoxVisibility();
    // });

    // function toggleBoxVisibility() {
    //     if ($(window).width() < 767) {
    //         $(".bitab").css({
    //             borderBottom: 'none',
    //             backgroundColor: '#1A2755',
    //             color:'#fff'
    //         });

    //         $(".gridtab").css({
    //             borderBottom: '0',
    //             background: 'none',
    //             color:'#000'

    //         });

    //         $(".colortab").css({
    //             borderBottom: '0',
    //             background: 'none',
    //             color:'#000'
    //         });

    //         $(".bgtab").css({
    //             borderBottom: '0',
    //             background: 'none',
    //             color:'#000'
    //         });
    //         toggleBoxVisibility();
    //     }
    // }

    $(".gridtab").click(function () {

        $(".bitab").css({
            borderBottom: '0',
            fontWeight: '500'
        });

        $(".gridtab").css({
            borderBottom: '4px solid #1A2755',
            fontWeight: '900'

        });

        $(".colortab").css({
            borderBottom: '0',
            fontWeight: '500'
        });

        $(".bgtab").css({
            borderBottom: '0',
            fontWeight: '500'
        });

        $(".bi").hide();
        $(".grid").show();
        $(".color").hide();
        $(".bg").hide();


    });

    //    // 모바일 

    //    $(window).resize(function () {
    //     toggleBoxVisibility();
    // });

    // function toggleBoxVisibility() {
    //     if ($(window).width() < 767) {
    //         $(".bitab").css({
    //             borderBottom: '0',
    //             background: 'none'
    //         });

    //         $(".gridtab").css({
    //             borderBottom: '0',
    //             backgroundColor: '#1A2755'
    //         });

    //         $(".colortab").css({
    //             borderBottom: '0',
    //             background: 'none'
    //         });

    //         $(".bgtab").css({
    //             borderBottom: '0',
    //             background: 'none'
    //         });

    //     toggleBoxVisibility();

    //     }
    // }


    $(".colortab").click(function () {

        $(".bitab").css({
            borderBottom: '0',
            fontWeight: '500'
        });

        $(".gridtab").css({
            borderBottom: '0',
            fontWeight: '500'
        });

        $(".colortab").css({
            borderBottom: '4px solid #1A2755',
            fontWeight: '900'

        });

        $(".bgtab").css({
            borderBottom: '0',
            fontWeight: '500'
        });

        $(".bi").hide();
        $(".grid").hide();
        $(".color").show();
        $(".bg").hide();

    });


        //     // 모바일 

        //     $(window).resize(function () {
        //         toggleBoxVisibility();
        //     });

        //     function toggleBoxVisibility() {
        //         if ($(window).width() < 767) {
        //             $(".bitab").css({
        //                 borderBottom: '0',
        //                 background: 'none'
        //             });

        //             $(".gridtab").css({
        //                 borderBottom: '0',
        //                 background: 'none'

        //             });

        //             $(".colortab").css({
        //                 borderBottom: '0',
        //                 backgroundColor: '#1A2755;'
        //             });

        //             $(".bgtab").css({
        //                 borderBottom: '0',
        //                 background: 'none'


        $(".bgtab").click(function () {

            $(".bitab").css({
                borderBottom: '0',
                fontWeight: '500'
            });

            $(".gridtab").css({
                borderBottom: '0',
                fontWeight: '500'
            });

            $(".colortab").css({
                borderBottom: '0',
                fontWeight: '500'
            });

            $(".bgtab").css({
                borderBottom: '4px solid #1A2755',
                fontWeight: '900'

            });

            $(".bi").hide();
            $(".grid").hide();
            $(".color").hide();
            $(".bg").show();
        });


        //     // 모바일


        //     $(window).resize(function () {
        //         toggleBoxVisibility();
        //     });

        //     function toggleBoxVisibility() {
        //         if ($(window).width() < 767) {
        //             $(".bitab").css({
        //                 borderBottom: '0',
        //                 backgroundColor: 'none',
        //                 color:'#000'
        //             });

        //             $(".gridtab").css({
        //                 borderBottom: '0',
        //                 backgroundColor: 'none',
        //                 color:'#000'

        //             });

        //             $(".colortab").css({
        //                 borderBottom: '0',
        //                 backgroundColor: 'none',
        //                 color:'#000'
        //             });

        //             $(".bgtab").css({
        //                 borderBottom: '0',
        //                 backgroundColor: '#1A2755;',
        //                 color: '#fff'
        //             });


});
