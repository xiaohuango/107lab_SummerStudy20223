$(function(){
    $('.header2 ul li').mouseenter(function(){
        $(this).css('color','#b6124a');
        console.log('111');
    });
    $('.header2 ul li').mouseleave(function(){
        $(this).css('color','#797979');
        console.log('222');
    });
    $('.header2 ul li.current').mouseenter(function(){
        $(this).css('background','#ffffff');
    });
    $('.header2 ul li.current').mouseleave(function(){
        $(this).css('background','#b6124a');
        $(this).css('color','#ffffff');
    });
    //----------------------------------------------------------------
    $('.banner').mouseenter(function(){
        $('.banner div').show();
        console.log('111');
    });
    $('.banner').mouseleave(function(){
        $('.banner div').hide();
        console.log('222');
    });


    //----------------------------------------------------------------
    var oul = $('.banner ul');
    var ali = $('.banner ul li');
    var numLi = $('.banner ol li');
    //var aliWidth = $('content1 ul li').width();
    var _now = 0;
    var _now2 = 0;
    var timeId;
    var isAnimating = false;
    // numLi.click(function(){
    //     var index = $(this).index();
    //     console.log(_now,_now2,index);
    //     $(this).addClass('current').siblings().removeClass();
    //     oul.animate({'left':-ali.width()*index},1000);
    //     _now = index;
    //     _now2 = index;
    // });
    function slider(){
        if(!isAnimating){
            isAnimating = true;
            if(_now == 2){
                ali.eq(0).css({
                    'position':'relative',
                    'left': oul.width()
                });
                _now=0;
            }else{
                _now++;
            };
            _now2++;
            numLi.eq(_now).addClass('current').siblings().removeClass();
            oul.animate({'left':-ali.width()*_now2},1000,function(){
                if(_now==0){
                    ali.eq(0).css('position','static');
                    oul.css('left',0);
                    _now2=0;
                }
                isAnimating = false;
            }); 
        }
    };
    timeId = setInterval(slider,3000);

    numLi.ready(function() {
        numLi.on('click', function() {
          if (!isAnimating) { // 如果动画未执行，则执行以下操作
            isAnimating = true; // 设置isAnimating为true，表示动画正在执行
            var index = $(this).index();
            console.log(_now,_now2,index);
            $(this).addClass('current').siblings().removeClass();
            // 执行轮播图的动画事件
            oul.animate({
              // 动画属性和值
              'left':-ali.width()*index
            },1000, function() {
              // 动画完成后的回调函数
              isAnimating = false; // 设置isAnimating为false，表示动画已经执行完毕
            });
            _now = index;
            _now2 = index;
            console.log(_now,_now2,isAnimating);
          }
        });
        $('.banner .right').click(function(){
            if(!isAnimating){
            slider();
            timeId = null;
            console.log(_now,_now2,isAnimating);
            }
        });
        $('.banner .left').click(function(){
            if(!isAnimating){
                isAnimating = true;
                if(_now == 0){
                    ali.eq(2).css({
                        'position':'relative',
                        'left': -oul.width()
                    });
                    _now = 2;
                }else{
                    _now--;
                };
                _now2--;
                numLi.eq(_now).addClass('current').siblings().removeClass();
                oul.animate({'left':-ali.width()*_now2},1000,function(){
                    if(_now == 2){
                        ali.eq(2).css('position','static');
                        oul.css('left',-2*ali.width());
                        _now2=2;
                    }
                    isAnimating = false;
                }); 
                timeId = null;
                
                console.log(_now,_now2,isAnimating);
            }
        });
    });
     
});
