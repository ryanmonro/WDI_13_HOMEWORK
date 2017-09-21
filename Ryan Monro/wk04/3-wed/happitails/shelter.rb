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

  def animals_count
    return @animals.count
  end

  def clients_count
    return @clients.count
  end

  def clients_with_pets_count
    count = 0
    @clients.each do |client|
      if client.pets_count > 0
        count += 1
      end
    end
    return count
  end

  def animal_with_index index
    return @animals[index]
  end 

  def client_with_index index
    return @clients[index]
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