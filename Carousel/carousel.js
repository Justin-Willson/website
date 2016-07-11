$(document).ready(function() {
    var numImg = $(".img-container img").length;
    var sliderWidth = $(window).width();
    var current = 1;
    var next = 2;
    var prev = numImg;
    console.log(numImg);

    //add dots to screen
    for( var i = 0; i < numImg; i++ ) {
        $(".dots").append("<div></div>");
    }

    //Helper function to cycle through and store image indicies
    var increaseImages = function() {
		if(current === numImg) {
			next = 1;
			prev = current - 1;
		} else {
			next = current + 1;
			if(current === 1) {
				prev = numImg;
			} else {
				prev = current - 1;
			}
		}
    };

    //Animations for slider
    var slideLeft = function() {
        $(".img-"+next).css( {"left": sliderWidth+"px"} );
        $(".img-"+current).animate( {left: sliderWidth * -1}, 1000 );
        $(".img-"+next).animate( {left: ((sliderWidth/2)-($(".img-"+next).width()/2))+"px"}, 1000 );
        current = next;
        increaseImages();
    };

    var slideRight = function() {
        $(".img-"+prev).css( {"left": (sliderWidth * -1)+"px"} );
        $(".img-"+current).animate( {left: sliderWidth}, 1000 );
        $(".img-"+prev).animate( {left: ((sliderWidth/2)-($(".img-"+prev).width()/2))+"px"}, 1000 );
        current = prev;
        increaseImages();
    };
    
    //Initial setup for images, put all images to the right so we can move them in
    var resetImg = function() {
        $(".img-container").css({"left": (sliderWidth)+"px"});
        $(".img-container").first().css({"left": ((sliderWidth/2)-$(".img-container").first().width()/2)+"px"});
        console.log("Reset Images")
    };
    resetImg();

    //Attach animations to buttons
    $(".left-nav").click(function() {
        slideRight();
    });

    $(".right-nav").click(function() {
        slideLeft();
    });


    //highlight nav buttons on hover
    $(".right-nav, .left-nav").hover(function() {
        $(this).css( {"background-color": "rgba(27, 27, 27, .9)"} );
    }, function() {
        $(this).css( {"background-color": "transparent"} );
    });

    $(".right-nav, .left-nav").on("click", function(e) {
        console.log( "CLICK!" );
    });
});