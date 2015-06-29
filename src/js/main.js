// Main.JS
// Author: Zac Maguire
// Project: Portfolio


$(document).ready(function(){

	// OWL ====================================


	  $("#owl-dgz,#owl-ngo").owlCarousel({

	      navigation : false, // Show next and prev buttons
	      navigationText : ["Prev","Next"],
	      pagination : false,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem : true,
	      autoPlay : 5000

	      // "singleItem:true" is a shortcut for:
	      // items : 1, 
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false

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

		var aa = $("#nav-bar").offset().top;

		$(document).scroll(function(){
		    if($(this).scrollTop() > aa)
		    {   
		       $('#nav-bar').removeClass("nav-bar-top");
		       $('#nav-bar').addClass("nav-bar-scroll, nav-bar-scroll a");

		    } else {
		       $('#nav-bar').removeClass("nav-bar-scroll, nav-bar-scroll a");
		       $('#nav-bar').addClass("nav-bar-top");
		    }
		});

	};




	// On window load fade in ====================================

    delayText();
   
	function delayText(){

		window.setTimeout(function(){
			$('#nameText').fadeIn(1000);
			$('#top-right-bar').fadeIn(1000);
			$('#nav').fadeIn(1000);
		}, 500);

		window.setTimeout(function(){
			$('#projectSlider').removeClass('opacity0');
		}, 3000);

	};


	// Scroll to unhide nav ====================================


	// $('#nav-bar').hide();

	

	// $('#work').scroll(function() {
	//     $('#nav-bar').hide();
	//     console.log("scro");
	// });

	// function testScroll(ev){
	//     if('#home'.pageYOffset>400)alert('User has scrolled at least 400 px!');
	// }
	// window.onscroll=testScroll




	

}); // Closing document ready










