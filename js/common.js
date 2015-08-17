/* mobile navigation icon toggle */
$(document).ready(function(){
	$('#m-nav-icon').click(function(){
		$(this).toggleClass('open');

		$(".global-nav").slideToggle( 300 );
	});
});