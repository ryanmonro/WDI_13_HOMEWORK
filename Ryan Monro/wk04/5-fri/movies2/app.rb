require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  if params['title']
    @title = params['title']
    @result = HTTParty.get("http://omdbapi.com/?s=#{@title}&apikey=" + ENV['OMDB_KEY']).parsed_response["Search"]
    if @result == nil
      erb :not_found
    elsif @result.size == 1
      @result = @result.first
      erb :movie
    else
      erb :results
    end
  else
    erb :index
  end
end

get '/about' do
  erb :about
end

get '/movie' do
  @imdbID = params['id']
  @result = HTTParty.get("http://omdbapi.com/?i=#{@imdbID}&apikey=" + ENV['OMDB_KEY']).parsed_response
    # binding.pry
  if @result['Title'] == nil
    erb :not_found
  else
    erb :movie
  end
end