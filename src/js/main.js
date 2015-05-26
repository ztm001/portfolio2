// Main.JS
// Author: Zac Maguire
// Project: Portfolio


$(document).ready(function(){


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










