// Main.JS
// Author: Zac Maguire
// Project: Portfolio


$(document).ready(function(){

	// Owl carousel slider ====================================

	initOwl();

    function initOwl(){

	    $('.owl-carousel').owlCarousel({
	        loop:true,
	        margin:15,
	        navText:false,
	        responsiveClass:true,
	        responsive:{
	            0:{
	                items:1,
	                nav:true   
	            },
	            600:{
	                items:3,
	                nav:true
	            },
	            1000:{
	                items:3,
	                nav:true,
	                dots:true
	            }
	        }
	    });

	}; // closing initOwl



	// On window load fade in ====================================

    delayText();
   
	function delayText(){

		window.setTimeout(function(){
			$('#nameText').fadeIn(1000);
			$('#nav').fadeIn(1000);
		}, 500);

		window.setTimeout(function(){
			$('#projectSlider').removeClass('opacity0');
		}, 3000);

	};

	

		

	



}); // Closing document ready










