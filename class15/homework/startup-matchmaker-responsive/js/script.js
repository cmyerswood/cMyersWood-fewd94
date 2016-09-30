$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
		if($(window).width() >=1000){
			$('#mobile-nav ul').hide();
		}
	})

	$('#burger').click(function(){
		$('#mobile-nav ul').slideToggle();
	});
})
