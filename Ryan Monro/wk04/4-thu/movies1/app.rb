require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  if params['title']
    @title = params['title']
    @result = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=" + ENV['OMDB_KEY']).parsed_response
    # binding.pry
    if @result["Response"] == "False"
      erb :not_found
    else
      erb :about
    end
  else
    erb :index
  end
end
