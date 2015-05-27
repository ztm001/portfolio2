// Main.JS
// Author: Zac Maguire
// Project: Portfolio


$(document).ready(function(){


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


	$('#nav-bar').hide();

	$(window).scroll(function() {
	   $('#nav-bar').show();
	});

	// $('#work').scroll(function() {
	//     $('#nav-bar').hide();
	//     console.log("scro");
	// });

	// function testScroll(ev){
	//     if('#home'.pageYOffset>400)alert('User has scrolled at least 400 px!');
	// }
	// window.onscroll=testScroll

	

}); // Closing document ready










