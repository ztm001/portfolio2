// Main.JS
// Author: Zac Maguire
// Project: Portfolio


$(document).ready(function(){

	// Progress loading bar ====================================

	var options = {
		bg: '#1dba9d'
	};
	var nanobar = new Nanobar( options );
	nanobar.go( 30 ); 
	nanobar.go(100);

	// Preload icon ====================================

    $(window).load(function() {
      // Animate loader off screen
      $('.se-pre-con').fadeOut('slow');
    });

	// OWL ====================================


	  $('#owl-dgz,#owl-ngo, #owl-lod, #owl-font, #owl-surf').owlCarousel({

	      navigation : false, // Show next and prev buttons
	      navigationText : ['Prev','Next'],
	      pagination : false,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem : true,
	      autoPlay : 5000

	  });




	// Update height background image =====================================

	function updateHeight(){
		var height = $(window).height();
		$('.top').css('height', height); 
	};

	$(document).ready(updateHeight);
	$(window).resize(updateHeight);




	// Nav bar scroll effect =====================================

	$(this).scrollTop(0); // fixes refresh bug on navBar

	navBar();    
	function navBar(){

		var aa = $('#nav-bar').offset().top;

		$(document).scroll(function(){
		    if($(this).scrollTop() > aa)
		    {   
		       $('#nav-bar').removeClass('nav-bar-top');
		       $('#nav-bar').addClass('nav-bar-scroll, nav-bar-scroll a');
		       $('#nav-logo-black').addClass('show');

		    } else {
		       $('#nav-bar').removeClass('nav-bar-scroll, nav-bar-scroll a');
		       $('#nav-bar').addClass('nav-bar-top');
		       $('#nav-logo-black').removeClass('show');
		    }
		});
	};



	// Floating arrow ====================================

	delayArrow();
	function delayArrow(){
		window.setTimeout(function(){
			$("#arrow").fadeIn(1000);
		}, 1000);
	}

	runIt();
	function runIt() {
	       $('#arrow').animate({bottom:'+=10'}, 1000);
	       $('#arrow').animate({bottom:'-=10'}, 1000, runIt);
	}



	// accordion ====================================

    $('.jquery-ui-accordion').accordion({
              header: 'h3',
              collapsible: true,
              active: false,
              heightStyle: 'content',
              activate: function (event, ui) {
                  var scrollTop = $(".accordion").scrollTop();
                  if(!ui.newHeader.length) return;
                  var top = $(ui.newHeader).offset().top;
                  $('html,body').animate({
                      scrollTop: scrollTop + top - 42
                  }, "fast");
              }
    });
    



	// Smooth Scroll ====================================

	smoothScroll.init({
	      speed: 800, // Integer. How fast to complete the scroll in milliseconds
	      easing: 'easeOutQuart', // Easing pattern to use
	      updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
	      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
	      callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
	      callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
	});





	// responsive nav options ====================================

	var nav = responsiveNav(".nav-collapse", { // Selector
	    animate: true, // Boolean: Use CSS3 transitions, true or false
	    transition: 300, // Integer: Speed of the transition, in milliseconds
	    label: "<i class=\"flaticon-rectangular4\"></i>", // String: Label for the navigation toggle
	    insert: "before", // String: Insert the toggle before or after the navigation
	    customToggle: "", // Selector: Specify the ID of a custom toggle
	    closeOnNavClick: true, // Boolean: Close the navigation when one of the links are clicked
	    openPos: "relative", // String: Position of the opened nav, relative or static
	    navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
	    navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
	    jsClass: "js", // String: 'JS enabled' class which is added to  element
	    init: function(){}, // Function: Init callback
	    open: function(){}, // Function: Open callback
	    close: function(){} // Function: Close callback
	});

	
	



	

}); // Closing document ready










