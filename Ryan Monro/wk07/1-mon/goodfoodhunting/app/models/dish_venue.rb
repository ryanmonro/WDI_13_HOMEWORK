class DishVenue < ApplicationRecord
  belongs_to :dish
  belongs_to :venue
end
