     
require 'sinatra'
require 'pg'

def run_db (sql)
  conn = PG.connect({ dbname: 'coffee1' })
  conn.exec(sql)
end

get '/' do
  erb :index
end

get '/posts' do
  sql = "SELECT * FROM POSTS;"
  @posts = run_db(sql)
  erb :posts
end




