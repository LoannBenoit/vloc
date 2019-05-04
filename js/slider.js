


    // Define the width of a slide and the interval for autoplay
    var slideWidth = $('#slider ul li').width();
    var interval;


    // Move to the previous slide
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }


    // move to the next slide
    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }


    var slider = {

        // Set slider's functionnalities
        init: function() {
            slider.keydown();
            slider.nextOnClick();
            slider.prevOnClick();
            slider.interval();
            slider.mouseover();
            slider.mouseleave();
        },


        // set interval to 5s for autoplay
        interval: function() {
           interval = setInterval(function () {
                moveRight();
              }, 5000);
        },
         
        
      // Clear the interval when hovering
	  mouseover: function(){
        $('#slider').mouseover(function(){
            clearInterval(interval);
          });
      },


      // Set the interval to 5s when leaving the hover  
      mouseleave: function(){
        $('#slider').mouseleave(function(){
            interval = setInterval(function () {
              moveRight();
              }, 5000);
          });
      },
		
		
        // Move to the previous slide by clicking on the left side
        prevOnClick: function() {
            var prev = $('.prev');
            prev.click(function() {
                moveLeft();
                return false;
            });
        },


        // Move to the next slide by clicking on the right side
        nextOnClick: function() {
            var next = $('.next');
            next.click(function() {
                moveRight();
                return false;
            })
        },


        // Move in a chosen direction by pressing on the arrows
        keydown: function(e){
            $(document).keydown(function(e){
                if (e.keyCode == 37) {
                    moveLeft();
                } else if (e.keyCode == 39) {
                    moveRight();
                }
            });
           
        },
        
    }
    

    // Init the slider



