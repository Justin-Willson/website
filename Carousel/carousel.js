$(document).ready(function() {
    var numImg = $(".img-container img").length;
    var sliderWidth = $(window).width();
    var current = 0;
    var next = 1;
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
        $(".img-"+current).animate( {left: sliderWidth}, 1000 );
        $(".img-"+next).animate( {left: "0px"}, 1000 );
        console.log("Slide Left Before Increase Current: " + current + " Next: " + next + " Prev: " + prev);
        current = next;
        increaseImages();
        console.log("Slide Left  After Increase Current: " + current + " Next: " + next + " Prev: " + prev);
    };

    var slideRight = function() {
        $(".img-"+prev).css( {"left": (sliderWidth * -1)+"px"} );
        $(".img-"+current).animate( {left: sliderWidth}, 1000 );
        $(".img-"+prev).animate( {left: "0px"}, 1000 );
        console.log("Slide Right");
        current = prev;
        increaseImages();
    };
    
    //Initial setup for images, put all images to the right so we can move them in
    var resetImg = function() {
        $(".img-container img").css({"left": sliderWidth+"px"});
        $(".img-container img").first().css({"left": "0px"});
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
        $(this).css( {"background-color": "#d3d3d3"} );
    }, function() {
        $(this).css( {"background-color": "transparent"} );
    });

    $(".right-nav, .left-nav").on("click", function(e) {
        console.log( "CLICK!" );
    });
});