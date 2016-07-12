$(document).ready(function() {
    $(".dot").hover(function() {
        $(this).toggleClass("focus");
    }, function() {
        $(this).toggleClass("focus");
    });

    $(".dot").click( function(e) {
        $(this).toggleClass( "active" );
        console.log("CLICK");
    });
});