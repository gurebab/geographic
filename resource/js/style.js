$(document).ready(function(){

    //헤더스크롤
    $(function(){
        var lastScrollTop = 0, data = 5;
        var header_height = $("header").height();
        $(window).scroll(function(e){
           var st = $(this).scrollTop();
           
           if(Math.abs(lastScrollTop - st) <= data){
              return;
            }
            if ((st > lastScrollTop) && (lastScrollTop>0)){
          $("header").css("top",-header_height);
      
       } else {
          $("header").css("top","0px");
       }
           lastScrollTop = st;
        });
    });

    $(".item_wrap").slick({
        slidesToShow: 4,
        arrows : true,
        prevArrow : $(".arrow_left"), 
        nextArrow : $(".arrow_right"), 

        responsive: [
					{  
						breakpoint: 1024,
						settings: {
							slidesToShow:3,
						} 
					}
				    ],
                    responsive: [
                        {  
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                            } 
                        }
                        ],
    });

    // 탭 
    $(".tap li a").click(function(){
        $(".tap li a").removeClass("active");
        $(this).addClass("active");
    });

    //모바일 헤더 메뉴
    $("header .m_menu_open").click(function(){
        $(this).toggleClass("active");
        $("body").toggleClass("active");
    });

    $(".go_top").click(function(){	
        $('html,body').animate({ scrollTop:0 },300)
    })

    $(window).scroll(function(){
        var scr = $(window).scrollTop();
        var section02_scr = $(".section02").offset().top - $(".section02").offset().top / 1.2;
        var section03_scr = $(".section03").offset().top - $(".section02").offset().top / 1.2;
        var section04_scr = $(".section04").offset().top - $(".section02").offset().top / 1.2;
        var section05_scr = $(".section05").offset().top - $(".section02").offset().top / 1.2;
        if(scr >= section02_scr){
            $(".section02").addClass("scr");
        }else{
            $(".section02").removeClass("scr");
        }
        if(scr >= section03_scr){
            $(".section03").addClass("scr");
        }else{
            $(".section03").removeClass("scr");
        }
        if(scr >= section04_scr){
            $(".section04").addClass("scr");
        }else{
            $(".section04").removeClass("scr");
        }
        if(scr >= section05_scr){
            $(".section05").addClass("scr");
        }else{
            $(".section05").removeClass("scr");
        }
    });
});