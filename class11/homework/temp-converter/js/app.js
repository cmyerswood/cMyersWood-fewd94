<<<<<<< HEAD
$(document).ready(function(){
	var rawTemp;
	var convTemp;
	var rawUnit;
	var convUnit;

	$('#submit').click(function(){
		rawTemp = $('#input').val();
		rawUnit = $('select').val();
		if(rawUnit === 'f'){
			convTemp = (rawTemp - 32) / 1.8;
			convUnit = "C";
		}else{
			convTemp = (rawTemp * 1.8) + 32;
			convUnit = "F";
		}
		$('#output').html(convTemp + " " + "&deg" + convUnit);
=======


	// $('#submit').click(function(){
  // alert(parseInt($('#temp').val()) + 10);
// });

var celsius = 
var fahrenheit = 
var x = $(temp).val()* 1.8 + 32;
var y = $(temp) * (1.8  - 32) / 1.8;


function convToF(celsius_input) {
var fahrenheit = celsius_input * 1.8 + 32;
$('#output').html('celsius_input + "°C is " + fahrenheit + "°F"');
}
	
	$('#c-to-f').click(function() {
		var getTemp = $('#temp').val()
	$('#output').html('')
>>>>>>> origin/master
	});
});

	// $('#submit').click(function(){
		// if(convTemp >= 50){
			// ('body').css("background-color", "orange");
		// }else{
			// ('body').css("background-color", "blue");
			// }
		// } 
	// });

	// });