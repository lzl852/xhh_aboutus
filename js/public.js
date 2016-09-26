$(function(){
    //折叠菜单
    $('.public_item_hd').tap(function(){
        $(this).find('.arrow').toggleClass('current');
        $(this).next('.public_item_bd').toggle();
    });
});

