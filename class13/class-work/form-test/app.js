$(document).ready(function () {

	$('#myForm').submit(function(e){
		console.log(e);
		var the_input = $('#name-input').val();
		$('#target').html(the_input);
		console.log(the-input);
	
		$('#target').html(the-input);
		e.preventDefault();

	});
	
});

$('#name-input')
$('#target')
