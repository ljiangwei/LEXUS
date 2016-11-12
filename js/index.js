$(function () {
    //获取页面
    var swipe = $('#swipe');
    var ul = $('.swipe-wrap');
    var lis = $('.num>li');
    //获取每一个元素的宽度
    oneWidth = ul.find('li').eq(0).width();

    //定时器
    var Timer = null;

    //索引值
    var iNow = 0;

    $('.num>li').click(function () {
        //给每一个小块添加样式
        $(this).css({'border':'1px solid #fff','opacity':'.5'}).siblings().css({'border':'','opacity':'1'});
        var index = $(this).index();
        iNow = index;

        ul.animate({
            "left":-oneWidth*iNow
        });
    });

    function autoPlay(){
        Timer = setInterval(function () {
            iNow++;
            if(iNow > lis.length - 1){
                iNow = 0;
            }
            lis.eq(iNow).trigger("click");
        },2000);
    }

    autoPlay();

    swipe.hover(function () {
        clearInterval(Timer);
    },autoPlay);
});