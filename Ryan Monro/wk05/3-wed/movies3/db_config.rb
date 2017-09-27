require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movies3'
}

ActiveRecord::Base.establish_connection(options)