jQuery.noConflict();
jQuery( document ).ready(function( $ ) {
  // You can use the locally-scoped $ in here as an alias to jQuery.
  // preloading effect
	$(document).ready(function() {
    $(window).load(function() {
      $('#loader').fadeOut(1600);
      $('#maincontent').show();
    });
  });
	/*for background changing */
	var images = [ "images/bg.jpg", "images/bg2.jpg"];
	 var currentImage = 0;
	 function changeBackground() {
			 $( '#csoon' ).css( { backgroundImage: 'url(' + images[ ++currentImage ] + ')' } );
			 if ( currentImage >= images.length - 1 ) {
					 currentImage -= images.length;
			 }
			 $(".Greeting").hide();
	 }
	 setInterval( changeBackground, 2000 );
	 //$(".Greeting").hide();
});
