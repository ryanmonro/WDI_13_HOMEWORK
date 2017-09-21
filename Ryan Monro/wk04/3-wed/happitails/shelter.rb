class Shelter
  def initialize
    @clients = []
    @animals = []
  end

  def add_animal animal
    @animals << animal
  end

  def add_client client
    @clients << client
  end

  def list_animals
    @animals.each do |animal|
      puts(animal.name + " - " + animal.species)
    end
  end

  def list_clients
    @clients.each do |client|
      puts(client.name)
    end
  end

  def animal_with_index index
    return @animals[index]
  end 

  def animal_with_name name
    @animals.each do |animal|
      if animal.name == name
        return animal
      end
    end
  end

  def client_with_index index
    return @clients[index]
  end

  def client_with_name name
    @clients.each do |client|
      if client.name == name
        return client
      end
    end
  end

  def adopt_animal_to_client(animal, client)
    client.add_pet(animal)
    @animals.delete(animal)
  end

  def add_animal_from_client(animal, client)
    client.remove_pet(animal)
    @animals << animal
  end
end