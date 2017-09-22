require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

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
      erb :movie
    else
      erb :results
    end
  else
    erb :index
  end
end

get '/movie' do
  @imdbID = params['id']
  @result = HTTParty.get("http://omdbapi.com/?i=#{@imdbID}&apikey=" + ENV['OMDB_KEY']).parsed_response
  if @result['Title'] == nil
    erb :not_found
  else
    erb :movie
  end
end

get '/history' do
  @history = File.readlines('search_history.txt').reverse
  erb :history
end

get '/about' do
  erb :about
end