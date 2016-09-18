$(document).ready(function(){

	var

	$('#submit').click(function() {
  		var fahrenheit = $('#drink').val()
  		var celsius = $('#food').val()
 	 $('#output').html(output)
 	 })

	$('#reset').click(function() {
		var drink = $('#temp').val('')
		var food = $('#scale').val('select')
	$('#output').html('')

	// $("#box1, #box2").click(function(){
		// $("#box1, #box2").css("background-color", "blue");
	// });


	// $("#box1, #box2").click(function(){
		// $("#box1, #box2").html("Words Words Words");
	// });

	// $("#box1").click(function(){
		// $("#box1").css("height", "500px");
		// $("#box1").css("width", "500px");
	// });

	// $("#box2").click(function(){
		// $("#box2").css("height", "500px");
		// $("#box2").css("width", "500px");
	// });

});