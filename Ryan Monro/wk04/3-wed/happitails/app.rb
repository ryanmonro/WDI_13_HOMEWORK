require 'pry'
require_relative 'animal'
require_relative 'client'
require_relative 'shelter'

def show_menu
  puts "Main Menu:"
  puts "----------"
  puts "1. List all animals"
  puts "2. List all clients"
  puts "3. Add new animal"
  puts "4. Add new client"
  puts "5. Adopt animal to client"
  puts "6. Put animal up for adoption"
  puts "7. Exit"
end

def add_client
  print "Enter client name: "
  name = gets.chomp
  print "Enter number of children: "
  children = gets.chomp
  print "Enter age: "
  age = gets.chomp
  print "Does the client have any pets?"
  if answer == 'y'
    #...
  end
  # create client
  # if any pets, add them to client
  # add to shelter
end

shelter = Shelter.new

shelter.add_animal(Animal.new('Dave', 5, 'male', 'orang-utan'))
shelter.add_animal(Animal.new('Sue', 9, 'female', 'dog'))
shelter.add_animal(Animal.new('Henry', 5, 'male', 'cat'))
shelter.add_client(Client.new('Geoff', 0, 30))
shelter.add_client(Client.new('Jeff', 1, 28))

shelter.adopt_animal_to_client(shelter.animal_with_index(0), shelter.client_with_index(0));

choice = 0
until choice == '7' do
  show_menu
  choice = gets.chomp
  case choice
    when '1'
      shelter.list_animals
    when '2'
      shelter.list_clients
    when '3'
      add_animal
    when '4'
      add_client
    when '5'
      adoption
    when '6'
      un_adoption
  end
end

# binding.pry