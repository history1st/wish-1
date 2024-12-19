$(function(){
    $(document).ready(function() {
        $(".con2-mun li").on("click", function() {
          let i = $(this).index();
          
          // 기존에 보여진 항목 숨기기
          $(".con2-canmoa li").hide();
          
          // 현재 클릭된 항목 보여주기
          $(".con2-canmoa li").eq(i).show();
          
          // 메뉴에서 활성화된 항목 변경
          $(".con2-mun li").removeClass("on-1 on-2 on-3");
          $(this).addClass("on-" + (i + 1));
          
          // 클릭한 항목에 호버 효과 추가
          $(".con2-mun li").removeClass("pofo");
          $(this).addClass("pofo");
        });
        


        // 초기 상태: 첫 번째 항목은 활성화
        $(".con2-mun li:first").trigger("click");
      });

      $(".menu-button").on("click", function() {
        // 기존 애니메이션 중지
        $(".one-pink, .one-blue, .one-yellow, .one-red, .one-green, .one-purple").stop();
    
        // 애니메이션 순차적으로 실행
        $(".one-pink").animate({"width": "70%"}, 600, function() {
            $(".one-blue").animate({"width": "65%"}, 600, function() {
                $(".one-yellow").animate({"width": "55%"}, 600, function() {
                    $(".one-red").animate({"width": "80%"}, 600, function() {
                        $(".one-green").animate({"width": "75%"}, 600, function() {
                            $(".one-purple").animate({"width": "70%"}, 600);
                        });
                    });
                });
            });
        });
    });
    

    let baseline = -200;
    let con1 = $(".miniroom").offset().top + baseline;
    let con2 = $(".say").offset().top + baseline;
    let con3 = $("#Skill").offset().top + baseline;
    let con4 = $(".con2-portfolio").offset().top + baseline;
    let con5 = $(".con3-portfolio2").offset().top + baseline;
    let con6 = $(".con4-contact").offset().top + baseline;
    // console.log(con1,con2,con3,con4,con5,con6);
    $(".content-box").on("scroll",function(){
        let scroll = $(this).scrollTop();
        if(scroll >= con2 && scroll < con3){
            $(".one-pink").stop().animate({"width":"70%"},600,function(){
                $(".one-blue").stop().animate({"width":"65%"},600,function(){
                    $(".one-yellow").stop().animate({"width":"55%"},600,function(){
                            $(".one-red").stop().animate({"width":"80%"},600,function(){
                                $(".one-green").stop().animate({"width":"75%"},600,function(){
                                    $(".one-purple").stop().animate({"width":"70%"});
                            });
                        });
                    });
                });
            });
        } else {
            $(".one-pink, .one-blue, .one-yellow, .one-red, .one-green, .one-purple").css({"width":"0%"});
        }
    });





    





});