 
 $(function(){
    /**
     * 下拉菜单
     */
 var nav_list = $(".nav_list");
 var nav_list_ol = $(".nav_list ol");

 nav_list.hover(function(){
     nav_list_ol.stop(false,true);
     $(this).addClass("current");
     $(this).find(".nav_list_child").slideDown(20);

 },function(){
     $(this).removeClass("current");
     $(this).find(".nav_list_child").slideUp(20);
 });
 // 图片的轮播
 var imgUl =$(".banner_img ul");
 var imgLi =$(".banner_img ul li");
 var imgPoint =$(".banner_point ol li");
 var imgWidth = 320;
 var imgLength =5;
 var timeId =null;
 var _index1 =0;//控制图片
 var _index2 =0//控制焦点
 var banner_timeId =null;
 //写轮播图执行滚动的方法
 function banner(){
    if(_index1>=imgLength-1){
        imgLi.eg(0).css({
            'position':'relative',
            'left':imgLength*imgWidth
        });
        _index2=0;
    }else{
        _index2++;
    }
   _index1++;

   imgUl.animate({left:-_index1*imgWidth},300,function(){
    if(_index1 == 4){
        imgLi.eq(0).css('position','static');
        imgUl.css('left',0);
        _index1 = -1;
        _index2=-1;
    }
});
//给焦点加样式
    imgPoint.eq(_index2).addClass("point_current").siblings().removeClass('point_current');
}
// 点击焦点的方法
function banner_click(){
    clearInterval(timeId);              //清除定时器    

    _index2 = $(this).index();
    _index1 = _index2;                   //将两个计数器同步

    imgPoint.eq(_index2).addClass("point_current").siblings().removeClass('point_current');
    imgUl.animate({left:-_index1*imgWidth},500);
    timeId = setInterval(banner,4000);  //再重新打开定时器 
}   

clearInterval(timeId);     
// 自动滚动的方法
timeId = setInterval(banner,4000);
// 点击焦点执滚动的执行
imgPoint.click(banner_click);
});
//当鼠标移到轮播图上时会停止，移开后继续滚动
$(".banner").hover(function() {
    clearInterval(timeId);
},function(){
    clearInterval(timeId);
    timeId = setInterval(banner,4000);  
});
$(document).on('scroll', function() {
    var $pageScrollTop = $(this).scrollTop()
    if ($pageScrollTop > 200) {
        $('#button1').show()
    } else {
        $('#button1').hide()
    }
})
$(document).ready(function(){
    $('#button1').on('click', function() {
        $('html, body').stop().animate({
            scrollTop: 0
        });
    });
  });
  $(document).ready(function(){
   $('.current').click(function() {
    $('#size').show().removeClass("hide2")
    $('.hide').click(function() {
       $('#size').hide()
    })
   })
  });
   var index=1;
   var index2=26;
   var timeId1 =null;
   var timeId2 =null;
   function ikun2() {
    
    $('.ikun img').animate({
        left:(index+1)*20,
        top:(index2-1)*20
    
    },function() {
        if(index2<0){
            clearInterval(timeId2);
        }
        });
    
    index ++;
    index2--;
}
  function ikun1() {
    
    $('.ikun img').animate({
        left:index*20,
        top:index*20
    
    },function() {
        if(index>26){
            clearInterval(timeId1);
            timeId2 =setInterval(ikun2,1000);
        }
    });
    index++;
}

  $(document).ready(function(){
    
    
    timeId1 = setInterval(ikun1,1000);
    $('.ikun img').hover(function() {
        clearInterval(timeId1);
        clearInterval(timeId2);
    },function(){
        clearInterval(timeId1);
        timeId1 = setInterval(ikun1,1000);} );
});


