var $searchButton = $('#search-btn')
var $searchInput = $('#search-input')
var $results = $('#results')
var offset = 0
var limit = 10

$searchButton.on('click', function(event){
  event.preventDefault()
  $results.text("")
  appendGifs($searchInput.val(), limit, offset) 
  offset += 10
})

$(document).on('scroll', function(event){
  if ($(document).scrollTop() + window.innerHeight > document.body.clientHeight) {
    appendGifs($searchInput.val(), limit, offset)  
    offset += 10
  }
  
})

var appendGifs = function(query, limit, offset){
  var options = {
    url: 'http://api.giphy.com/v1/gifs/search',
    method: 'get',
    data: {
      q: query,
      api_key: 'tF45r1CFJotuA7a0nJL4TrWQ4JHaFwmN',
      limit: limit,
      offset: offset
    }
  }
  var append = function(response){
    response.data.forEach(function(result){
      var gif = result.images.fixed_width
      $img = $('<img>').attr({src: gif.url, width: gif.width, height: gif.height})
      $results.append($img)
      $results.append($("<br>"))
    })
  }
  $.ajax(options).done(append)
}
