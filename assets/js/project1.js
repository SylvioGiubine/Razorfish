$( document ).ready(function() {

	/**********************
		 Initial state
	**********************/
	$( ".hamburger" ).hide();

	/* hide hamburger menu */
	$( ".hamburger" ).click(function() {
		$( ".nav" ).slideToggle( "slow", function() {
		  $( ".hamburger" ).hide();
		  $( ".cross" ).show();
		});
	});

	/* hide cross and display hamburger menu*/
	$( ".cross" ).click(function() {
		$( ".nav" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		 });
	});
});