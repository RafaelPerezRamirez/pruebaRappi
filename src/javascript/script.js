var time;
function showInfo(){
    var windowsize = $(window).width();
    if (windowsize > 679) {
        time = 70;
        addClasses(time);
    }else{
        setTimeout(function(){
            $('.main-content').addClass('mainanimation');
        }, 500);
        $('.menu-button').on('click', function(){
            time = 40;
            addClasses(time);
        })
        $('.header-item').on('click', function(){
            $(this).closest('.item-loop').find('.item-internal-content').slideToggle();
        })
    }
}
function addClasses(time){
    $('.item-loop').each(function(i){
        var row = $(this);
        setTimeout(function() {
            row.addClass('showitem');
        }, time*i);
    })
}
$( document ).ready(function() {
    showInfo();
});
