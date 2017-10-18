

$('#search-button').on('click', function(event){
  event.preventDefault()
  var searchString = $('#search-input').val()
  var options = {
    url: 'http://omdbapi.com/',
    method: 'get',
    data: {
      s: searchString,
      apikey: '2f6435d9'
    }
  }
  var appendMovies = function(response){
    $('.results').text("")
    response.Search.forEach(function(movie){
      var $p = $('<p>').append(movie.Title)
      $('.results').append($p)
    })
  }
  $.ajax(options).done(appendMovies) 
})
