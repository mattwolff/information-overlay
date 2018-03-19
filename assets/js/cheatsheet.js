$(document).ready(function(){
  $("#bookmarklet").click(function() {


		// IMAGE REMOVER
			$("img").css("opacity", "0");
			$("svg").css("opacity", "0");
			$("*").css("background-image", "none");

		// TEXT REMOVER
			$("*").css("color", "rgba(0,0,0,0)");

		// IMAGE OVERLAYER
			var image = "https://mattwolff.github.io/information-overlay/assets/images/future.gif";

			$('head').append('<link rel="stylesheet" href="https://mattwolff.github.io/information-overlay/assets/css/image-overlay.css" type="text/css" />');
	    $("body").append('<div class="overlay-image-wrapper"><img id="overlay-image" src="' + image + '" /></div>');

		// TEXT OVERLAYER
			var text = "Hello World";

			$('head').append('<link rel="stylesheet" href="https://mattwolff.github.io/information-overlay/assets/css/image-overlay.css" type="text/css" />');
	    $("body").append('<div class="overlay-text-wrapper">' + text + '</div>');
	});
});
