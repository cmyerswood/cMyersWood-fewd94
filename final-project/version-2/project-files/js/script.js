// /*Back to top button*/
// 	$('.top').click(function() {
// 		$("html, body").animate({scrollTop: 650}, 2800);
// 	});

$(document).ready(function () {

	$(nav).hover(
        function (event) {
            $(this).find(".hideshow").show();
            $(this).find(".hideshow").css("background-color", "#808080");

        },
        function (event) {
            $(this).find(".hideshow").hide();
            $(this).find(".hideshow").css("background-color", "#fff");
        }
     );




});