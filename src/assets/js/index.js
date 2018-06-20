const $ = require('jquery');
exports = module.exports = {   
    scrollFunction:function(){ 
        var aNav = $('#nav ul li a'); //导航
        var aDiv = $('.section'); //楼层
            $(window).scroll(function() {
                        //可视窗口高度
                        var winH = $(window).height();
                        //鼠标滚动的距离
                        var iTop = $(window).scrollTop();

                        if(iTop >= $(".layout").height()) {
                            //鼠标滑动样式改变
                            aDiv.each(function() {
                                //console.log($(this).offset().top);
                                if(winH + iTop - $(this).offset().top > winH / 2) {
                                    //console.log(aNav);
                                    aNav.removeClass('active');
                                    //console.log(aNav);
                                    aNav.siblings().hide();
                                    aNav.eq($(this).index()).addClass('active');
                                    aNav.eq($(this).index()).siblings().show();
                                    
                                    $(".fadeinB").css('animation',"");
                                    $(".fadeinA").css('animation',"");
                                    if($(this).index()=='2'){
                                        $(".fadeinB").css('animation',"fadeinB 3s");
                                        $(".fadeinA").css('animation',"fadeinA 3s");
                                    }
                                    if($(this).index()=='3'){
                                        $(".fadeinB").css('animation',"fadeinB 3s");
                                        $(".fadeinA").css('animation',"fadeinA 3s");
                                    }
                                }
                            })
                        }
                        })
            $('#nav ul li a').click(function(){
                $(this).siblings('span').show().parent().siblings().children('span').hide();
                $(this).addClass('active').parent().siblings().children('a').removeClass('active');
            })
    },
    carouselNotice:function(){
        //$(".platformMsg-box ul li").eq(0).clone().appendTo($(".platformMsg-box ul"));//克隆第一张图放在最后一张
        //$(".platformMsg-box ul li:nth-last-child(2)").clone().prependTo($(".platformMsg-box ul"));//克隆最后一张图放在第一张
        $index=0;
        timing();
        function timing(){
            $timer=setInterval(function(){
                //clearInterval($timer);
                $index++;
                liMove();
            },3000)
        }
        // function liMove(){
        //     $(".platformMsg-box ul").stop().animate({
        //         top:-($index+1)*50+"px"
        //     },500,function(){
        //         if($index==$(".platformMsg-box ul li").length){
        //             $index=0;
        //         }
        //         else if($index<0){
        //             $index=$(".platformMsg-box ul li").length-1;
        //         }
        //          $(".platformMsg-box ul").css("top",-($index+1)*50+"px");
                
        //         timing();
        //     })
        // }
        function liMove(){
            if($index==$(".platformMsg-box ul li").length){
               $index=0;
            }else if($index<0){
                $index=$(".platformMsg-box ul li").length-1;
            }
            $(".platformMsg-box ul li").css('display',"none");
            $(".platformMsg-box ul li").eq($index).css("display",'block');
        }
    }
   
}