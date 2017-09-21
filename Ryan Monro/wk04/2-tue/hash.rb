require 'pry'

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}


# How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?

users['Jonathan'][:twitter]

# How would you add the number `7` to Erik's favorite numbers?

users['Erik'][:favorite_numbers].push 7

# How would you add yourself to the users hash?

users['Ryan'] = {
  :twitter => 'monroryan',
  :favorite_numbers => [4, 12, 42, 64]
}

# How would you return the array of Erik's favorite numbers?

users['Erik'][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?

users['Erik'][:favorite_numbers].sort.first
# or array.min!

# How would you return an array of Anil's favorite numbers that are also even?

users['Anil'][:favorite_numbers].select { |number| number.even?  }

# How would you return an array of the favorite numbers common to all users

common_favorites = users['Erik'][:favorite_numbers] &
  users['Jonathan'][:favorite_numbers] &
  users['Anil'][:favorite_numbers] &
  users['Ryan'][:favorite_numbers]

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

all_favorites = []
users.values.each { |user| all_favorites.push user[:favorite_numbers]  }
puts all_favorites.flatten.sort.uniq

binding.pry