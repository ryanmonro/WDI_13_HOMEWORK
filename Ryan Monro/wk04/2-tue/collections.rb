require 'pry'

#
# ARRAYS
#

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# access the second value
planeteers[1]

# add "Heart" to planeteers
planeteers.push("Heart")

# remove Captain Planet without using a method
planeteers = planeteers[0..1] + planeteers[3..4]

# combine planeteers with rangers in a new array called heroes
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = rangers + planeteers

# sort heroes
heroes.sort!

# randomise heroes
heroes.shuffle!

# select a random element
random_hero = heroes.sample
puts random_hero

# select heroes starting with B
b_heroes = heroes.select { |hero|
  hero.start_with?('B')
}
puts b_heroes

#
# HASHES
#

ninja_turtle = {
  :name => "Michelangelo",
  :weapon => "Nunchuks",
  :radical => true
}

# add age to ninja_turtle
ninja_turtle[:age] = 2017 - (1984 - 18)
# assuming he was teenage when the comic first came out

# remove radical from ninja_turtle
ninja_turtle.delete :radical

# add pizza toppings
ninja_turtle[:pizza_toppings] = ['cheese', 'pepperoni', 'peppers']

# access the first element of pizza_toppings
first_pizza_topping = ninja_turtle[:pizza_toppings][0]

# create an array of keys
ninja_turtle_keys = ninja_turtle.keys

# print out key value pairs
ninja_turtle.each { |key, val|
  puts(key.to_s + " is equal to " + val.to_s)
}

# binding.pry