class Client
  def initialize(name, number_of_children, age)
    @name = name
    @number_of_children = number_of_children
    @age = age
    @pets = []
  end
  def name
    return @name
  end
  def add_pet(animal)
    @pets << animal
  end
  def remove_pet(animal)
    @pets.delete(animal)
  end
  def pet_with_name name
    @pets.each do |pet|
      if pet.name == name
        return pet
      end
    end
  end
  def pet_with_index index
    return @pets[index]
  end
end