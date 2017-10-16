class Venue < ApplicationRecord
  has_many :dish_venues
  has_many :dishes, through: :dish_venues
end
