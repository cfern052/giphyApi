
var movies = ["They Live", "2001: A Space Odessy", "The Holy Mountain", "City of God", "Bill and Ted", "The Big Lebowski"];


  // event.preventDefault();

  


  function showButtons() {

    $("#buttons").empty();

    for (var i = 0; i < movies.length; i++) {
      var movieTitle = movies[i];
      var movieButton = $('<button>');

      movieButton.addClass("movie")

      movieButton.attr("data-name", movies[i]);

      movieButton.text(movies[i]);

      $('#buttons').append(movieButton);
    }
  };
  showButtons();


//make for loop that goes through each name
//have movies[i]=movieTitle
//button.attr(movieTitles)
//put movieTitle in urlquery

$(document).on("click", ".movie", function () {

  event.preventDefault();

  var title = $(this).attr("data-name");
  console.log(this);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    title + "&api_key=u2AOZsmlHlP5hXjazamB9Ew0scser5VW&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var movieImage = $("<img>");
        movieImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(movieImage);

        $("#gif").prepend(gifDiv);
      }
    });
});

$(document).on("click", "#add-movie", function (event) {
  event.preventDefault();

  // $("#buttons").empty();

  var movie = $("#movie-input").val().trim();


  movies.push(movie);
  // if(movie==movies){
  //   return false;
  // }
  // else{
  //   movies.push(movie);
  // }

  showButtons();
});



