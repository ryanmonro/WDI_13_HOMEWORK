class Dish < ApplicationRecord
  has_many :comments
  has_many :dish_venues
  has_many :venues, through: :dish_venues
end
