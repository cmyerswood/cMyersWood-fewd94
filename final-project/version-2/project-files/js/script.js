// /*Back to top button*/
// 	$('.top').click(function() {
// 		$("html, body").animate({scrollTop: 650}, 2800);
// 	});

$(document).ready(function () {

	$('#more').mouseover(function(){
        $('nav').slideToggle();
    });

  $('#depth1').click(function () {
          $(this).show('slide', { direction: 'left' }, 1000);
    });

    // $('#depth1').click(function () {
    //       $(this).show("#cat", { direction: "left" }, 1000);
    // });

// var amountScrolled = 100;

// $('.wrapper').scroll(function() {
//     if ( $('.wrapper').scrollTop() > amountScrolled ) {
//         $('a.back-to-top').fadeIn('slow');
//     } else {
//         $('a.back-to-top').fadeOut('slow');
//     }
// });

});