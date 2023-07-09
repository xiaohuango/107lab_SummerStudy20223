$(function(){
    //ËÑË÷¿ò
    $('.search2').mouseenter(function(){
        $('.search2').css('opacity','1');
        
    });
    $('.search2').mouseleave(function(){
        $('.search2').css('opacity','0.4');
        
    });
   
    //µ¼º½À¸
    $('.header_nav > ul > li').mouseover(function(){
        $(this).addClass('current').children('ul').show();
       
    });
    $('.header_nav > ul > li').mouseout(function(){
        $(this).removeClass('current').children('ul').hide();
        
    });
    $('.nav > li').mouseover(function(){
        $(this).addClass('current');
        
    });
    $('.nav > li').mouseout(function(){
        $(this).removeClass('current');
        
    });


    //ÂÖ²¥Í¼
    var oul = $('.content11 ul');
    var ali = $('.content11 ul li');
    var numLi = $('.content11 ol li');
    //var aliWidth = $('content11 ul li').width();
    var _now = 0;
    var _now2 = 0;
    var timeId;
    numLi.click(function(){
        var index = $(this).index();
        console.log(_now,_now2,index);
        $(this).addClass('current').siblings().removeClass();
        oul.stop(true.false).animate({'left':-$('.content11 ul li').width()*index},500);
        $('.newstitle li').eq(index).show().siblings().hide();
        _now = index;
        _now2 = index;
    });
    function slider(){
        if(_now == 4){
            $('.content11 ul li').eq(0).css({
                'position':'relative',
                'left': oul.width()
            });
            _now=0;
        }else{
            _now++;
        };
        _now2++;
        numLi.eq(_now).addClass('current').siblings().removeClass();
        oul.animate({'left':-$('.content11 ul li').width()*_now2},500,function(){
            if(_now==0){
                ali.eq(0).css('position','static');
                oul.css('left',0);
                _now2=0;
            };
        }); 
        $('.newstitle li').eq(_now).show().siblings().hide();
        console.log(_now,_now2);
    };
    timeId = setInterval(slider,3000);

    //·µ»Ø¶¥²¿
    $(document).ready(function(){
        $("#btn").hide();
        $(function(){
            $(window).scroll(function(){
                if($(window).scrollTop() > 50){
                    $("#btn").fadeIn(200);}
                else{$("#btn").fadeOut(200)}
            });
            $("#btn").click(function(){
                $('body,html').animate({
                    scrollTop:0
                },500);
                return false;
            });
        });
    });

    //¸¡¶¯´°¿Ú
    var b = $("#float");
    var nowleft = 0;
    var nowtop = 0;
    var rdirection = 2;
    var cdirection = 2;
    var rmove;
    var cmove;
    var timeId;
    console.log(rmove,cmove);
    b.mouseover(function(){
        rdirection = 1;
        cdirection = 1;    
    });
    b.mouseout(function(){
        rdirection = 2;
        cdirection = 2;
    });
    function float(){
        rmove = $(window).width()-$("#float").width();
        cmove = $(window).height()-$("#float").height();
        if(nowleft < 0 || nowleft > rmove){rdirection *= -1};
        if(nowtop < 0 || nowtop > cmove){cdirection *= -1};
        b.animate({'left':nowleft},2);
        b.animate({'top':nowtop},2);
        nowleft += rdirection;
        nowtop += cdirection;  
    };
    timeId = setInterval(float,2);

    //±äºìÐ§¹û
    // $('.content li').mouseenter(function(){
    //     $(this).addClass('red');
    // });
    // $('.content li').mouseleave(function(){
    //     $(this).removeClass('red');
    // });
});
