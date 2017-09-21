require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

api_key = '2f6435d9'

get '/' do
  if params['title']
    @title = params['title']
    @result = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=" + api_key).parsed_response
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
