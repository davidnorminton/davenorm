/**
 * Author  : David Norminton
 * Website : davenorm.me
 * Email   : davidnorminton@gmail.com
 */
/**
 * SET ONLOAD CSS
 * Some elements need their dimensions set based on device dimensions
 */
function setDimensions() {
    var frontpage = $('#front-page');
    // centre about area on front page
    var windowHeight = $(window).height();
    // get window width
    var windowWidth = $(window).width();
    // make front page correct height to fit browser
    frontpage.css('height', windowHeight);
    // give projects 100% height of screen
    $('#projects').css('height', windowHeight);  
    // add padding to about to center
    aboutWrapperHeight = $('.box-wrapper').outerHeight();
    // calc padding
    padd = (windowHeight - aboutWrapperHeight) / 2; 
    $('.box-wrapper').css('padding-top', padd);   
    // skills section chart and tools add padding to top
    // first tools
    var tools = $('.tools');
    var toolsHeight = tools.outerHeight();
    var toolsPadd = (windowHeight - toolsHeight) /2;
    // tools also needs padding at side
    var toolsWidth = tools.width();
    // tools is inside right div so get width of this
    var rightDivWidth = $('.right').width();
    var rightDivPadd = (rightDivWidth - toolsWidth) / 2;

    tools.css({'padding-top': toolsPadd, 'padding-left' : rightDivPadd, 'padding-right' : rightDivPadd});
    // now chart 
    var chart = $('.chart');
    var chartHeight = chart.outerHeight();
    var chartPadd = (windowHeight - chartHeight) /2;
    chart.css('padding-top', chartPadd);
}   
/**
 * onload set dimensions
 */
$(document).ready(function(){
    setDimensions();  
});
/**
 * Detect if browser resizes and re adjust div sizes
 */
$(window).resize(function(){
   setDimensions();   
});
/**
 * Initial load hero image animations
 */
$(window).on('load',function(){
     setTimeout(function(){
          $('.front-title').fadeIn(1500);
     }, 500);  
});
/**
 * MAIN MENU : ANIMATIONS AND BACKGROUND
 * animate burger menu on nav hover
 */
$(document).ready(function(){
    // bar normal css style reset
    var bars = ['bar1', 'bar2','bar3'];
    var barsLen = bars.length;
    function resetBars() {
        for ( var i = 0; i < barsLen; i++) {
            $('.'+bars[i]).css({'width': '30px', 'left':'0'});
        } 
    }
    $('#nav').hover(function(){
        // this check is due to lines moving when in X form
        if ( $('#nav').hasClass('no-cross') ) {
            // mouseover effect change length of burger lines
            $('.bar1').css({'width': '30px', 'left':'0'});
            $('.bar2').css({'width': '20px', 'left':'5px'});
            $('.bar3').css({'width': '10px', 'left':'10px'});
        } else {
            resetBars();
        }
     }, 
     function(){
        if ( $('#nav').hasClass('no-cross') ) {
            // mouseleave efect restore to burger menu
            resetBars();
        } else {
            resetBars();
        }
});
/**
 * set links to low opacity to animate when side panel loaded
 */
var links = ['about','project','process','blog','contact'];
var i;
var linksLen = links.length; 
for (i=0; i<linksLen;i++) {
    $('#pane-'+links[i]).css({'opacity':'0', 'bottom':'250px'});
}
function animateTimeOut(i) {
    setTimeout( function() {
        $('#pane-'+links[i]).animate({'opacity':'0.8', 'bottom':'0'});
    }, i*500); 
}
/**
 * function to animate opacity of links when pane loaded
 */
function animateLinks() {
    for(i=0; i<linksLen;i++) {
        animateTimeOut(i);
    }
}
/**
 * animtions when hover over main menu links 
 */
// replace ' X ' with hamburger menu
function closeMenu() {
    $('.side').animate({'right':'-35%'});
    $('#menu-pic').animate({'left':'-65%'});
    $('.bar1').css({'transform': 'rotate(0deg)', 'top':'7px'});
    $('.bar2').css({'display': 'block'});
    $('.bar3').css({'transform': 'rotate(0deg)'});
    $('#nav').addClass('no-cross');
    $('html').css('overflow-y','scroll')
}
// aniamte menu background images and replace hamburger with an ' X '
$('#nav').click(function(){
    if ( $('#nav').hasClass('no-cross') ) {
        $('.side').animate({'right':'0'});
        $('#menu-pic').animate({'left':'0'});
        $('.bar1').css({'transform': 'rotate(45deg)', 'top':'17px'});
        $('.bar2').css({'display': 'none'});
        $('.bar3').css({'transform': 'rotate(315deg)'});
        $('#nav').removeClass('no-cross');
        $('html').css('overflow-y','hidden')
        animateLinks();
    } else {
        closeMenu();
    }
});
/**
 * add sound effect when hover over links in menu
 */
var clank = $(".clank")[0];
$(".site-links a").mouseenter(function() {
		  clank.play();
	         });
// close menu when link has been clicked
$('a').click(function(){
     closeMenu();
});
// add images on hover of menu item
function linkHover(project) {
   $('#menu-pic').removeClass().addClass('pane-'+project);
}
$('#pane-project').hover(function(){
    linkHover('project');
});
$('#pane-about').hover(function(){
    linkHover('about');
});
$('#pane-skills').hover(function(){
    linkHover('skills');
});
$('#pane-contact').hover(function(){
    linkHover('contact');
});
$('#pane-process').hover(function(){
    linkHover('process');
});
$('#pane-blog').hover(function(){
    linkHover('blog');
    });
});
/**
 * END MENU CODE
 * BEGIN CODE TO ADD SECTION TITLE WHEN IN VIEWPORT
 */
/**
 * Produce a title next to burger menu when
 * section comes into view
 * @param element - the element to find vertical position of
 * @param precision - the elemnt may requirea little refining
 */
function waypoints(element, precision) {
    // element to find position of
    this.element = element;
    // get window height
    this.win_height = $(window).height();
    // get window scroll top
    this.scrollTop = $(window).scrollTop();
    // get bottom of window position
    this.win_bottom = this.win_height + this.scrollTop;
    // add precision to position
    this.precision = precision;
    // element offset position
    this.eleOffset =  $(this.element).offset().top + $(this.element).outerHeight()-this.precision;
    // range element is in viewport
    this.range =  this.eleOffset + this.win_height;
    
}
/**
 * when section in viewport add title of section next to burger menu
 */
$(document).scroll(function(){
    // about section
    var about = new waypoints('#about-me', 10);
    if ( about.win_bottom > about.eleOffset  ) {
        $('#about-head').fadeIn(300);
    } else {
        $('#about-head').fadeOut(300);
    }
    if ( about.win_bottom > about.eleOffset && about.win_bottom < about.range ) {
        $('.about-title').fadeIn(300);
    } else {
        $('.about-title').css({'display':'none'});
    }
    // skills section
    var skills = new waypoints('#skills',70);
    if ( skills.win_bottom > skills.eleOffset && skills.win_bottom < skills.range ) {
        $('.skills-title').fadeIn(300);
    } else {
        $('.skills-title').css({'display':'none'});
    }
    // contact section
    var contact = new waypoints('#contact', 40);   
    if ( contact.win_bottom > contact.eleOffset && contact.win_bottom < contact.range ) {
        $('.contact-title').fadeIn(300);
    } else {
        $('.contact-title').css({'display':'none'});
    }
    // projects section
    var projects = new waypoints('#projects', 40);
    if ( projects.win_bottom > projects.eleOffset && projects.win_bottom < projects.range ) {
        $('.projects-title').fadeIn(300);
        $('.work-to-head').css('display' , 'inline-block');       
    } else {
        $('.projects-title').css({'display':'none'});
        $('.work-to-head').css('display' , 'none');
    }
    // opensource section
    var opensource = new waypoints('#opensource', 40);
    if ( opensource.win_bottom > opensource.eleOffset && opensource.win_bottom < opensource.range ) {
        $('.opensource-title').fadeIn(300);
        $('.work-to-head').css('display' , 'inline-block');       
    } else {
        $('.opensource-title').css({'display':'none'});
        $('.work-to-head').css('display' , 'none');
    }
});
/**
 * Fade the about-me section background to white on scroll
 */
$(document).scroll(function(){

    var height_of_about = $('#about-me').outerHeight();

    var top_of_about = $('#about-me').offset().top + height_of_about;

    var win_scroll = $(window).height() + $(window).scrollTop();


    if( win_scroll < (top_of_about + (height_of_about / 10 ) ) ) {
        $('#about-me').css('background','#1b1a1a'); 
    }
    if( win_scroll > (top_of_about + (height_of_about / 10)) ) {
        $('#about-me').css('background','rgb(51, 50, 50)'); 
    }
    if( win_scroll > (top_of_about + (height_of_about / 10) * 2) ) {
        $('#about-me').css('background','rgb(72, 70, 70)'); 
    }  
  
    if( win_scroll > (top_of_about + ((height_of_about / 10) * 3)) ) {
        $('#about-me').css('background','rgb(90, 89, 89)'); 
    }
    if( win_scroll > (top_of_about + ((height_of_about / 10) * 4)) ) {
        $('#about-me').css('background','rgb(115, 114, 114)'); 
    }    

    if( win_scroll > (top_of_about + ((height_of_about / 10) * 5))  ) {
        $('#about-me').css('background','rgb(134, 132, 132)'); 
    }
    if( win_scroll > (top_of_about + ((height_of_about / 10) * 6)) ) {
        $('#about-me').css('background','rgb(148, 146, 146)'); 
    }
    if( win_scroll > (top_of_about + (height_of_about / 10) * 7)  ) {
        $('#about-me').css('background','rgb(169, 166, 166)'); 
    }
    if( win_scroll > (top_of_about + (height_of_about / 10) * 8)  ) {
        $('#about-me').css('background','rgb(193, 191, 191)'); 
    }
    if( win_scroll > (top_of_about + (height_of_about / 10) * 9)  ) {
        $('#about-me').css('background','rgb(218, 217, 217)'); 
    }
    if( win_scroll > (top_of_about + (height_of_about / 10) * 10)  ) {
        $('#about-me').css('background','#fff'); 
    }
});

/**
 * Animations when bar chart in view
 *
 */
// first set css on bars
    var skills = ['css','html','javascript','php','linux'];
    var skills_len = skills.length;
    var i;
$(document).ready( function(){
    for( i=0; i< skills_len;i++ ){
        $('.'+skills[i]).css({'height':'0'});
    }
});
$(window).scroll(function(){
    // check in view
    var win_bottom = $(window).height() + $(window).scrollTop();
    // get position of about-p 
    var skills_head = $('#skills').offset().top + $('#skills').outerHeight() -70;

    if ( win_bottom > skills_head ) {
        for( i=0; i<skills_len; i++ ) {
            $('.'+skills[i]).addClass('animate-'+skills[i]);
        }
    }
});
/**
 * PROJECTS SECTION :
 * 
 */
// object to store project navigation data and calculate correct
// links to go into next, prev, and title box's
var proData = {
    // array of project titles
    projects : ['k-eng', 'beesafe', 'fitscreen', 'bonneela', 'allheavymetal'],
    // method to return length of projects array
    projectsLen : function(){
        return this.projects.length
    },
    // store values for nav buttons - these keys correspond to projects array values
    prev : 1, next : 1,current : 1,            
    // get value from array - pos is equal to key
    getValue : function(pos) {
        return this.projects[pos];     
    },
    // clear the screen on any projects present
    clear : function(){
        for ( var i=0; i < this.projectsLen(); i++ ) {
            $('#'+ this.projects[i]).css('display','none');
        }           
    }, 
    // method to return indexOf link attr in array
    projectIndex : function(project) {
        return this.projects.indexOf(project);
    },
    // change prev property from knowing the current prev position
    chgallFromPrev : function(pos) {
                if ( pos == 0 ) {
                    this.prev = (this.projectsLen()-1);
                    this.current = 0;
                    this.next = 1;
                }
                else if ( pos == ( this.projectsLen() -1 ) ) {
                    this.prev = this.projectsLen() -2;
                    this.current = pos;
                    this.next = 0; 
                } 
                else {
                    this.prev = pos -1;
                    this.current = pos;
                    if ( pos > this.projectsLen() -1 ) {
                        this.next = 0;
                    } else {
                        this.next = pos + 1
                    }
                }
             
            },
    // change current, next and prev values given the array key
    chgallFromNext : function(pos) {
        if ( pos == this.projectsLen()-1 ) {
            this.next = 0;
            this.current = pos;
            this.prev = this.projectsLen()-2
        }   
        else if ( pos == 0 ) {
            this.next = 1;
            this.current = pos;
            this.prev = this.projectsLen()-1    
        } 
         else {
            this.next = pos + 1;
            this.current = pos;
            this.prev = pos -1;
        }
    },
    // if known prev project set current and next from this
    changeFromknownPrev : function(prev) {
        posKnownPrev = this.projectIndex(prev);
        this.chgallFromPrev(posKnownPrev);                     
    },
    // if known next project set current and prev from this
    changeFromknownNext : function(next) {
        posKnownNext = this.projectIndex(next);
        this.chgallFromNext(posKnownNext);
    },
    // changeDOM
    changeDOM : function( title ) {
        this.clear();
        $('#'+title).css('display','block');
        $('#prev-project').attr('data-prev', this.getValue(this.prev));
        $('#next-project').attr('data-next', this.getValue(this.next));
        $('.work-list').children('.list-item').html(title);
    }
}
// prev button click action
$('#prev-project').click(function(){
    // data-prev attr stores prev project
    var item_data = $(this).attr('data-prev');
    // set proData object properties based on data-prev value  
    proData.changeFromknownPrev(item_data);
    // set changes in the DOM  
    proData.changeDOM(item_data);
});
// next button click action
$('#next-project').click(function(){
    // data-prev attr stores prev project
    var item_data = $(this).attr('data-next');
    // set proData object properties based on data-prev value  
    proData.changeFromknownPrev(item_data);
    // set changes in the DOM  
    proData.changeDOM(item_data);
});
/** end projects navigation **/

/**
 * Smooth scrolling
 */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/**
 * lazy load images
 */
$(document).scroll(function(){

    /**
     * Is image in view
     * @param image - image to calculate position
     * @return boolean
     */
    function inView( image ) {
        var view_top = $(window).scrollTop()+200,
            view_bottom = view_top + $(window).height(),
            image_pos = $(image).offset().top;
        return image_pos > 0 && image_pos < view_top ;     
    }
    
    // capture each img tag and check if it has a data-src attribute
    $('img').each(function(){
        if ( this.hasAttribute('data-src') && inView(this) ) {
            // if a web-page image is in view exchange all data-src for regular src
            if ($(this).hasClass('web-page')) {
               $('.web-page').each( function(){
                   var src = this.getAttribute('data-src');
                   this.removeAttribute('data-src');
                   this.src = src;
                });
            } else {
                    var src = this.getAttribute('data-src');
                   this.removeAttribute('data-src');
                   this.src = src;           
            }    
        }    
    });    
}); 
