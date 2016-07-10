$(document).ready(function() {
    function fullscreen(){
        var myWidth = $(window).width();
        var myHeight =$(window).height();// myWidth * (1048/1920);
        $('#parallax-hero div').css({
            width: myWidth,
            height: myHeight
        });
    }

    fullscreen();

    $(window).resize(function() {
        fullscreen();
    })
});