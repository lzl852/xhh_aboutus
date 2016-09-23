$(function(){
    //折叠菜单
    $('.public_item_hd').tap(function(){
        $(this).find('.arrow').toggleClass('current');
        $(this).next('.public_item_bd').toggle();
    })
    tabSwiper();
});
//鑫保障tab选项卡切换
function tabSwiper(){
    var _slide = $('.swiper-wrapper>.swiper-slide');
    var arr = [];
    //获取初始化各个.swiper-slide的高度;
    function getInitHeight(){
        for(var i=0; i<_slide.length; i++){
            arr.push(_slide.eq(i).height());
        }
    }
    getInitHeight();
    var mySwiper = new Swiper('.swiper-container',{
        autoHeight: false,
        calculateHeight: true,
        cssWidthAndHeight: true,
        onSlideChangeStart: function(){
            $(".tabs .default").removeClass('default');
            $(".tabs li").eq(mySwiper.activeIndex).addClass('default');
        }
    });
    $(".swiper-wrapper").height(arr[0]);
    $(".tabs li").on('click',function(e){
        e.preventDefault();
        $(".tabs .default").removeClass('default');
        $(this).addClass('default');
        mySwiper.swipeTo($(this).index());
        $(".swiper-wrapper").height(arr[$(this).index()]);
    });
}
