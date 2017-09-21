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

def get_answer (prompt)
  answer = ""
  while answer == "" do
    print prompt
    answer = gets.chomp
  end
  return answer
end

def new_animal
  name = get_answer "Enter animal name: "
  age = get_answer "Enter animal's age: "
  gender = get_answer "Enter animal's gender: "
  species = get_answer "Enter animal's species: "
  animal = Animal.new(name, age, gender, species)
  return animal
end

def new_client
  name = get_answer "Enter client name: "
  children = get_answer "Enter number of children: "
  age = get_answer "Enter age: "
  client = Client.new(name, children, age)
  answer = get_answer "Does the client have any pets? (y/n) "
  while answer == 'y'
    pet = new_animal
    client.add_pet pet
    answer = get_answer "Do you want to add another pet? (y/n) "
  end
  return client
end

def animal_string animal
  result = animal.name + " - " + animal.age.to_s + "y/o " + animal.gender + " " + animal.species
  if animal.toy_count > 0
    result += ". Toys: "
    animal.toy_count.times do |index|
      toy = animal.toy_with_index(index)
      result += toy + " "
    end
  end
  return result
end

def client_string client
  result = client.name + " - " + client.age.to_s + " y/o"
  if client.number_of_children
    result += ", " + client.number_of_children.to_s + " children"
  end
  return result
end

def list_animals shelter
  puts "\n Animals in Shelter:"
  shelter.animals_count.times do |index|  
    animal = shelter.animal_with_index index
    puts index.to_s + ": " + animal_string(animal)
  end
  puts ""
end

def list_clients shelter, with_pets_only
  puts "\n Clients:"
  shelter.clients_count.times do |index|
    client = shelter.client_with_index(index)
    if with_pets_only && client.pets_count == 0
      next
    end
    puts index.to_s + ": " + client_string(client)
    list_client_pets(client, false)
  end
  puts ""
end

def list_client_pets client, show_index
  client.pets_count.times do |pet_index|
    pet = client.pet_with_index(pet_index)
    result = "\t"
    if show_index 
      result += pet_index.to_s + ": "
    end
    result += animal_string(pet)
    puts result
  end
end

def adoption shelter
  if shelter.animals_count == 0
    puts "No available animals in shelter.\n"
    return
  end
  list_clients(shelter, false)
  client_index = get_answer("Enter index of client: ")
  client = shelter.client_with_index client_index.to_i
  list_animals shelter
  animal_index = get_answer("Enter index of animal to adopt: ")
  animal = shelter.animal_with_index animal_index.to_i
  shelter.adopt_animal_to_client(animal, client)
end

def unadoption shelter
  if shelter.clients_with_pets_count == 0
    puts "No clients have pets available to put up for adoption.\n"
    return
  end
  list_clients(shelter, true)
  client_index = get_answer("Enter index of client: ")
  client = shelter.client_with_index client_index.to_i
  list_client_pets(client, true)
  pet_index = get_answer("Enter index of pet to put up for adoption: ")
  animal = client.pet_with_index pet_index.to_i
  shelter.add_animal_from_client(animal, client)
end

shelter = Shelter.new

shelter.add_animal(Animal.new('Dave', 5, 'male', 'orang-utan'))
sue = Animal.new('Sue', 9, 'female', 'dog')
sue.add_toy("bone")
shelter.add_animal(sue)
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
      list_animals(shelter)
    when '2'
      list_clients(shelter, false)
    when '3'
      animal = new_animal
      shelter.add_animal animal
    when '4'
      client = new_client
      shelter.add_client client
    when '5'
      adoption(shelter)
    when '6'
      unadoption(shelter)
  end
end
