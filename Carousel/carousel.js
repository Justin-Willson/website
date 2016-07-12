$(document).ready(function() {
    /*  Function to make a simple caurosel
    
        REQUIREMENTS: images of the form
            <div class="img-container img-*"> <- *= image index
                <img>
            </div>
            Two <div> of class left-nav and right-nav
    */

    //TODO: Add ability to populate from arbitrary list of images

    //inatialize variables and store relative position
    var numImg = $(".img-container img").length;
    var sliderWidth = $(window).width();
    var current = 1;
    var next = 2;
    var prev = numImg;
    var myInterval = 3000;

    //initiate interval
    var timer = setInterval(function() { slideLeft() }, myInterval);
    

    //Add dots to screen and implement 
    for( var i = 1; i <= numImg; i++ ) {
        $(".dots").append('<div class="dot" id="dot-' + i + '"></div>');
    }

    $(".dot").click(function() {
        var goal = $(this).index() + 1;
        $(".img-"+goal).css( {"left": sliderWidth+"px"} );
        $(".img-"+current).animate( {left: $(".img-"+current).width() * -1}, 1000 );
        $(".img-"+goal).animate( {left: ((sliderWidth/2)-($(".img-"+next).width()/2))+"px"}, 1000 );
        current = goal;
        increaseImages();
    });

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

        //update active dot
        $(".dot").removeClass("active");
        $("#dot-"+current).addClass("active");
    };

    //Animations for slider
    var slideLeft = function() {
        $(".img-"+next).css( {"left": sliderWidth+"px"} );
        $(".img-"+current).animate( {left: $(".img-"+current).width() * -1}, 1000 );
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
        sliderWidth = $(window).width();
        $(".img-container").css({"left": (sliderWidth)+"px"});
        $(".img-"+current).css({"left": ((sliderWidth/2)-$(".img-"+current).width()/2)+"px"});
        $("#dot-"+current).addClass("active");
    };
    resetImg();

    //Attach animations to buttons
    $(".left-nav").click(function() {
        slideRight();
        clearInterval(timer);
        timer = setInterval(function() { slideLeft() }, myInterval);
    });

    $(".right-nav").click(function() {
        slideLeft();
        clearInterval(timer);
        timer = setInterval(function() { slideLeft() }, myInterval);
    });

    //Reset images on screen resize
    $(window).on("resize", function() {
        resetImg();
    });

    
});