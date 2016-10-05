var title = "";

$('#submit').click(function(e){
	title = $('#title').val();
	getMovie(title);
    e.preventDefault();
});

function getMovie(movieName)
{
    $.getJSON("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json", function(json) {
         console.log(json.Director); 
         $('#title_output').text(json.Title);
    
         console.log(json.Director); 
         $('#starring_output').text(json.Actors);

         console.log(json.Director); 
         $('#plot_output').text(json.Plot);

         console.log(json.Director); 
         $('img').attr('src', json.Poster);
    });
}



