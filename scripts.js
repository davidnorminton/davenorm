/**
 * Some elements need their dimensions set based on device dimensions
 */
function setDimensions() {
    var frontpage = $('#front-page');
    // centre about area on front page
    var windowHeight = $(window).height();
    // make front page correct height to fit browser
    frontpage.css('height', windowHeight);

    // set amin height for projects div
    $('#projects').css('min-height', windowHeight);
}


/**
 * onload set dimensions
 */
$(document).ready(function(){
    setDimensions();
    
});


/**
 * Detect if browser resizes and re adjust div sizes
 *
 */
$(window).resize(function(){
   setDimensions();   
});

/**
 * Initial load hero image animations
 */
$(window).on('load',function(){
     $('#box1').removeClass('box1-start').addClass('box1');
     $('#box2').removeClass('box2-start').addClass('box2');
     $('#box3').removeClass('box3-start').addClass('box3');
     $('#box4').removeClass('box4-start').addClass('box4');
     setTimeout(function(){
          $('.front-title').fadeIn(1500);
          
     }, 4000);
     
});
/**
 * animate burger menu on nav hover
 */
$(document).ready(function(){
    $("nav").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });
});
/**
 * actions to invoke when the user scolls
 */
$(window).scroll( function(){

    /**
     * function to animate skills bar chart
     */
    $('.hideme').each( function(i){

        var bottom_of_object = $('#skills').offset().top + $('#skills').outerHeight() - 150;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            element = this.id;
            switch(element) {

                case 'html':
                    width = "100%";
                    break;
                case 'css':
                    width = "90%";
                    break;
                case 'javascript' :
                    width = "80%";
                case 'php':
                    width = "80%";
                    break;
                case 'mysql':
                    width = "60%";
                    break;
                case 'linux':
                    width = "60%";
                    break;
            }
            if ( $('#linux').hasClass('done') ) {
                //continue
            } else {
                $('#'+element).animate({left: '600px', opacity: '0.5', height: '40px', width: width,
                                        }).css('border','4px solid #151552');
                // detect linux bar has been shown and stop animation problems caused without this!
                if ( element == 'linux' ) {
                    $('#linux').addClass('done');
                }
            }
        } else {
            // add a position reset function
        }

    });


/**
 * function to animate browser view
 */
    $('.browser-view').each(function(){
         var elementId = this.id;
         var bottom_of_object = ( $('#'+elementId).offset().top + $('#'+elementId).outerHeight() ) - 130;
         var bottom_of_window = $(window).scrollTop() + $(window).height();  

         if (bottom_of_window > bottom_of_object) {
             $('#'+elementId).animate({ 'opacity': 1.0, 'bottom' : 0 }, 1000);
         }
    });


/**
 * function to animate work info panes
 */
    $('.work-info-pane').each(function(){
         var elementId = this.id;
         var bottom_of_object = ( $('#'+elementId).offset().top + $('#'+elementId).outerHeight() ) - 250;
         var bottom_of_window = $(window).scrollTop() + $(window).height();  

         if (bottom_of_window > bottom_of_object) {
             $('#'+elementId).animate({ 'opacity': 1.0, 'right' : 0 }, 1000);
         }
    });
});


/**
 * Smooth scrolling
 */
$(document).ready(function(){
    var hashTagActive = "";
    $(".scroll").on("click touchstart" , function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 1500, 'swing');
            hashTagActive = this.hash;
        }
    });
});
