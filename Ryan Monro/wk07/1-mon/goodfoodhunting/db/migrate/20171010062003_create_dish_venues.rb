class CreateDishVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :dish_venues do |t|
      t.references :dish, foreign_key: true
      t.references :venue, foreign_key: true

      t.timestamps
    end
  end
end
