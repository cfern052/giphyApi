$(document).ready(function(){

var movies = ["Star Wars","The Terminator","The Matrix","Brazil","Bill and Ted","Annihilation"];
for(var i=0;i<movies.length;i++){
    var movieTitle=movies[i];
    var movieButton= $('<button>');
    movieButton.attr(movies[i]);
    movieButton.text(movies[i]);
    $('#buttons').append(movieButton);
}
//make for loop that goes through each name
//have movies[i]=movieTitle
//button.attr(movieTitles)
//put movieTitle in urlquery

$("button").on("click", function() {
    var title = $(this).attr(movieTitle);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      movieTitle + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var movieImage = $("<img>");
          movieImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(movieImage);

          $("#gifs").prepend(gifDiv);
        }
      });
  });


})