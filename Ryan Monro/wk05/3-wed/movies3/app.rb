require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require_relative 'db_config'
require_relative 'models/movie'

def log_search string
  open('search_history.txt', 'a') do |file|
    file.puts string
  end
end

get '/' do
  if params['query']
    @query = params['query']
    log_search @query
    @result = HTTParty.get("http://omdbapi.com/?s=#{@query}&apikey=" + ENV['OMDB_KEY']).parsed_response["Search"]
    if @result == nil
      erb :not_found
    elsif @result.size == 1
      @result = @result.first
      @imdbID = @result['imdbID']
      redirect "/movie?id=#{@imdbID}"
    else
      erb :results
    end
  else
    erb :index
  end
end

get '/movie' do
  @imdbID = params['id']
  # is movie in local db?
  @local_result = true
  @movie = Movie.where(:imdb_id => @imdbID).first
  if @movie == nil
    # if not, query omdb
    @result = HTTParty.get("http://omdbapi.com/?i=#{@imdbID}&apikey=" + ENV['OMDB_KEY']).parsed_response
    if @result['Title'] == nil
      erb :not_found
    else
      # now we have our Movie object, pass it through
      @local_result = false
      @movie = Movie.new
      @movie.imdb_id = @imdbID
      @movie.title = @result['Title']
      @movie.year = @result['Year']
      @movie.rated = @result['Rated']
      @movie.released = @result['Released']
      @movie.runtime = @result['Runtime']
      @movie.genre = @result['Genre']
      @movie.director = @result['Director']
      @movie.writer = @result['Writer']
      @movie.actors = @result['Actors']
      @movie.plot = @result['Plot']
      @movie.poster = @result['Poster']
      @movie.save
    end
  end
  # binding.pry
  erb :movie
  # @movie
end

get '/history' do
  @history = File.readlines('search_history.txt').reverse
  erb :history
end

get '/about' do
  erb :about
end