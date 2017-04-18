function setDimensions(){var a=$("#front-page"),b=$(window).height();$(window).width();a.css("height",b),$(".box-wrapper").each(function(){aboutWrapperHeight=$(".box-wrapper").outerHeight(),padd=(b-aboutWrapperHeight)/2,$(this).css("padding-top",padd)});var d=$(".tools"),e=d.outerHeight(),f=(b-e)/2,g=d.width(),h=$(".right").width(),i=(h-g)/2;d.css({"padding-top":f,"padding-left":i,"padding-right":i});var j=$(".left").width(),k=$(".chart"),l=k.width(),m=(j-l)/2;k.css("margin-left",m);var n=k.outerHeight(),o=(b-n)/2;k.css("padding-top",o),$(".head-title").offset().top<$(window).height()-20&&$(".head-title").fadeOut("fast")}function waypoints(a,b){this.element=a,this.win_height=$(window).height(),this.scrollTop=$(window).scrollTop(),this.win_bottom=this.win_height+this.scrollTop,this.precision=b,this.eleOffset=$(this.element).offset().top,this.eleHeight=$(this.element).outerHeight(),this.totalOffset=$(this.element).offset().top+$(this.element).outerHeight()-this.precision,this.range=this.eleOffset+this.eleHeight+this.win_height,this.projectsOffset=this.eleOffset+660,this.projectsRange=function(){return this.win_bottom>this.projectsOffset&&this.win_bottom<this.range},this.inRange=function(){return this.win_bottom>this.totalOffset&&this.win_bottom<this.range}}$(document).ready(function(){setDimensions()}),$(window).resize(function(){setDimensions()}),$(window).on("load",function(){setTimeout(function(){$(".front-title").fadeIn(1500)},500)}),$(document).ready(function(){function c(){for(var c=0;c<b;c++)$("."+a[c]).css({width:"30px",left:"0"})}function g(a){setTimeout(function(){$("#pane-"+d[a]).animate({opacity:"0.8",bottom:"0"})},500*a)}function h(){for(e=0;e<f;e++)g(e)}function i(){$(".side").animate({right:"-35%"}),$("#menu-pic").animate({left:"-65%"}),$(".bar1").css({transform:"rotate(0deg)",top:"7px"}),$(".bar2").css({display:"block"}),$(".bar3").css({transform:"rotate(0deg)"}),$("#nav").addClass("no-cross"),$("html").css("overflow-y","scroll")}function k(a){$("#menu-pic").removeClass().addClass("pane-"+a)}var a=["bar1","bar2","bar3"],b=a.length;$("#nav").hover(function(){$("#nav").hasClass("no-cross")?($(".bar1").css({width:"30px",left:"0"}),$(".bar2").css({width:"20px",left:"5px"}),$(".bar3").css({width:"10px",left:"10px"})):c()},function(){$("#nav").hasClass("no-cross"),c()});var e,d=["about","project","opensource","blog","contact"],f=d.length;for(e=0;e<f;e++)$("#pane-"+d[e]).css({opacity:"0",bottom:"250px"});$("#nav").click(function(){$("#nav").hasClass("no-cross")?($(".side").animate({right:"0"}),$("#menu-pic").animate({left:"0"}),$(".bar1").css({transform:"rotate(45deg)",top:"17px"}),$(".bar2").css({display:"none"}),$(".bar3").css({transform:"rotate(315deg)"}),$("#nav").removeClass("no-cross"),$("html").css("overflow-y","hidden"),h()):i()});var j=$(".clank")[0];$(".site-links a").mouseenter(function(){j.play()}),$("a").click(function(){i()}),$("#pane-project").hover(function(){k("project")}),$("#pane-about").hover(function(){k("about")}),$("#pane-skills").hover(function(){k("skills")}),$("#pane-contact").hover(function(){k("contact")}),$("#pane-process").hover(function(){k("process")}),$("#pane-blog").hover(function(){k("blog")})}),$(document).scroll(function(){$(".head-title").offset().top<$(window).height()-20&&$(".head-title").fadeOut("fast");var a=new waypoints("#about-me",10);a.win_bottom>a.totalOffset?$("#about-head").fadeIn(300):$("#about-head").fadeOut(300),a.inRange()?$(".about-title").fadeIn(300):$(".about-title").fadeOut("fast"),new waypoints("#skills",70).inRange()?$(".skills-title").fadeIn(300):$(".skills-title").fadeOut("fast"),new waypoints("#contact",40).inRange()?$(".contact-title").fadeIn(300):$(".contact-title").fadeOut("fast"),new waypoints("#projects",40).projectsRange()?($(".projects-title").fadeIn(300),$(".work-to-head").css("display","inline-block")):($(".projects-title").fadeOut("fast"),$(".work-to-head").fadeOut("fast"))}),$(document).scroll(function(){function a(a){var a=a,b=$("#about-me").outerHeight(),c=$("#about-me").offset().top+b,d=$(window).height()+$(window).scrollTop();return 0===a?d<c+b/10:d>c+b/10*a}function b(a){var b=["#1b1a1a","rgb(51, 50, 50)","rgb(72, 70, 70)","rgb(90, 89, 89)","rgb(115, 114, 114)","rgb(134, 132, 132)","rgb(148, 146, 146)","rgb(169, 166, 166)","rgb(193, 191, 191)","rgb(218, 217, 217)","#fff"],a=a;return $("#about-me").css("background",b[a])}a(0)&&b(0),a(1)&&b(1),a(2)&&b(2),a(3)&&b(3),a(4)&&b(4),a(5)&&b(5),a(6)&&b(6),a(7)&&b(7),a(8)&&b(8),a(9)&&b(9),a(10)&&b(10);var c=$(".pages-p"),d=$(".about-me-back");c.css({top:"200px",opacity:"0"}),d.css({bottom:"200px",opacity:"0"});var e=new waypoints(".pages-p",200);e.win_bottom>e.totalOffset&&(c.css({opacity:"1",top:"0"}),d.css({bottom:"0",opacity:"1"}))});var skills=["css","html","javascript","php","linux"],skills_len=skills.length,i;$(document).ready(function(){for(i=0;i<skills_len;i++)$("."+skills[i]).css({height:"0"})}),$(window).scroll(function(){if($(window).height()+$(window).scrollTop()>$("#skills").offset().top+$("#skills").outerHeight()-70)for(i=0;i<skills_len;i++)$("."+skills[i]).addClass("animate-"+skills[i])}),$(".project-img").hover(function(){var a=$(this).children(".project-cover"),b=$(this).find("p"),c=$(this).find("h3"),d=$(this).find(".view-case");a.css({right:"0",opacity:"0.8"}),b.css({transform:"scale(1.2)"}),c.css({transform:"scale(1.2)"}),d.css({transform:"scale(1.2)"})},function(){var a=$(this).children(".project-cover"),b=$(this).find("p"),c=$(this).find("h3"),d=$(this).find(".view-case");a.css({right:"100%",opacity:"0"}),b.css({transform:"scale(1)"}),c.css({transform:"scale(1)"}),d.css({transform:"scale(1)"})}),$(".view-case").hover(function(){$(this).children(".button-overlay").animate({opacity:"1",width:"100%"},1e3)},function(){$(this).children(".button-overlay").animate({opacity:"0",width:"0"},400)}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top},1e3),!1}})}),$("#submitButt").hover(function(){$(this).children(".submit-overlay").animate({opacity:"1",width:"100%"},1e3)},function(){$(this).children(".submit-overlay").animate({opacity:"0",width:"0"},400)}),$(document).scroll(function(){function a(a){var b=$(window).scrollTop()+200,d=($(window).height(),$(a).offset().top);return d>0&&d<b}$("img").each(function(){if(this.hasAttribute("data-src")&&a(this))if($(this).hasClass("web-page"))$(".web-page").each(function(){var a=this.getAttribute("data-src");this.removeAttribute("data-src"),this.src=a});else{var b=this.getAttribute("data-src");this.removeAttribute("data-src"),this.src=b}})});
