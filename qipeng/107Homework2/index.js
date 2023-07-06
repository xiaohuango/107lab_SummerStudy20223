$(function(){
    $('.search1L').mouseenter(function(){
        $('.search1L').css('background','white');
        console.log('111');
    });
    $('.search1L').mouseleave(function(){
        $('.search1L').css('background','#f5aa02');
        console.log('222');
    });
    //----------------------------------------------------------------
    $('.header2 > ul > li').mouseover(function(){
        $(this).children('ul').stop(true.false).slideDown(300);
        console.log('333');
    });
    $('.header2 > ul > li').mouseout(function(){
        $(this).children('ul').stop(true.false).slideUp(300);
        console.log('444');
    });
    //----------------------------------------------------------------
    $('.content211 ul li').click(function(){
        $(this).addClass('current1').siblings().removeClass();
        console.log('555');
    });

    //----------------------------------------------------------------
    //----------------------------------------------------------------
    var oul = $('.content1 ul');
    var ali = $('.content1 ul li');
    var numLi = $('.content1 ol li');
    //var aliWidth = $('content1 ul li').width();
    var _now = 0;
    var _now2 = 0;
    var timeId;
    numLi.click(function(){
        var index = $(this).index();
        console.log(_now,_now2,index);
        $(this).addClass('current').siblings().removeClass();
        oul.animate({'left':-$('.content1 ul li').width()*index},500);
        _now = index;
        _now2 = index;
    });
    function slider(){
        if(_now == $('.content1 ol li').size()-1){
            $('.content1 ul li').eq(0).css({
                'position':'relative',
                'left': oul.width()
            });
            _now=0;
        }else{
            _now++;
        };
        _now2++;
        numLi.eq(_now).addClass('current').siblings().removeClass();
        oul.animate({'left':-$('.content1 ul li').width()*_now2},500,function(){
            if(_now==0){
                ali.eq(0).css('position','static');
                oul.css('left',0);
                _now2=0;
            };
        }); 
        console.log(_now,_now2);
    };
    timeId = setInterval(slider,3000);

    $('.content1 .right').click(function(){
        slider();
        timeId = null;
    });
    $('.content1 .left').click(function(){
        if(_now == 0){
            $('.content1 ul li').eq(3).css({
                'position':'relative',
                'left': -oul.width()
            });
            _now=3;
        }else{
            _now--;
        };
        _now2--;
        numLi.eq(_now).addClass('current').siblings().removeClass();
        oul.animate({'left':-$('.content1 ul li').width()*_now2},500,function(){
            if(_now==3){
                ali.eq(3).css('position','static');
                oul.css('left',-3*ali.width());
                _now2=3;
            };
        }); 
        timeId = null;
        console.log(_now,_now2);
    });
    //----------------------------------------------------------------
    $('.content211 > ul > li').click(function(){    
        var index = $(this).index();
        if(index == 0){
            $(".poem1 ul:first").show().siblings().hide();
        }
        if(index == 1){
            $(".poem1 ul:first").hide().siblings().show();
        }
    });
    //----------------------------------------------------------------
    $('.content2122 div').click(function(){    
        var index = $(this).index();
        $('.content2121 div').eq(index).show().siblings().hide();
        $('.content2122 div').eq(index).addClass('current2').siblings().removeClass();
        $('.content2122 div').eq(index).children('p').show();
        $('.content2122 div').eq(index).siblings().children('p').hide();
    });
    //----------------------------------------------------------------
    $('.content213 span').click(function(){
        var index3 = $(this).index();
        $('.content213 div').slideUp(300);
        $('.content213 div').eq(index3/2).slideDown(300); 
    });
    //----------------------------------------------------------------
    var oul1 = $('.content221 ul');
    var ali1 = $('.content221 ul li');
    //var aliWidth = $('content1 ul li').width();
    var _now1 = 0;
    function slider1(){
        _now1++;
        oul1.animate({'left':-($('.content221 ul li').width()+26)*_now1},500,function(){
            if(_now1==6||_now1==7||_now1==8){
                $('.content221 ul').css('left',0);
                _now1=0;
            };
        }); 
    };
    setInterval(slider1,2000);
    $('.content221 .right').click(function(){
        slider1();
        console.log(_now1);
    });
    $('.content221 .left').click(function(){
        _now1--;
        console.log(_now1);
        oul1.animate({'left':-($('.content221 ul li').width()+26)*_now1},500,function(){
            if(_now1==0||_now1==-1){
                oul1.css('left',-6*($('.content221 ul li').width()+26));
                _now1=7;
            };
        }); 
    });
    //----------------------------------------------------------------
    
    $('.content222 div img').click(function(){
        var _this = $(this);//将当前的pimg元素作为_this传入函数
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
    });
    function imgShow(outerdiv, innerdiv, bigimg, _this){
        var src = _this.attr("src");//获取当前点击的pimg元素中的src属性
        $(bigimg).attr("src", src);//设置#bigimg元素的src属性
        /*获取当前点击图片的真实大小，并显示弹出层及大图*/
        $("<img/>").attr("src", src).load(function(){
            var windowW = $(window).width();//获取当前窗口宽度
            var windowH = $(window).height();//获取当前窗口高度
            var realWidth = this.width;//获取图片真实宽度
            var realHeight = this.height;//获取图片真实高度
            var imgWidth, imgHeight;
            var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放
            if(realHeight>windowH*scale) {//判断图片高度
                imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放
                imgWidth = imgHeight/realHeight*realWidth;//等比例缩放宽度
                if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度
                    imgWidth = windowW*scale;//再对宽度进行缩放
                }
            } else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度
                imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放
                imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度   
            } else {//如果图片真实高度和宽度都符合要求，高宽不变
                imgWidth = realWidth;
                imgHeight = realHeight;
            } 
            $(bigimg).css("width",imgWidth);//以最终的宽度对图片缩放
            var w = (windowW-imgWidth)/2;//计算图片与窗口左边距
            var h = (windowH-imgHeight)/2;//计算图片与窗口上边距
            $(innerdiv).css({"top":h, "left":w});//设置#innerdiv的top和left属性
            $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg
        }); 
        $(outerdiv).click(function(){//再次点击淡出消失弹出层
            $(this).fadeOut("fast");
        });
    } 
});
