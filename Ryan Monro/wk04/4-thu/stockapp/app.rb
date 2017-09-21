require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'
require 'pry'

get '/' do
  if params[:stock] &&
    @stock_name = params[:stock]
    yahoo_response = YahooFinance::get_quotes(YahooFinance::StandardQuote, @stock_name)
    @result = yahoo_response[@stock_name]
    # binding.pry
    erb :stock
  else 
    erb :index
  end
end
