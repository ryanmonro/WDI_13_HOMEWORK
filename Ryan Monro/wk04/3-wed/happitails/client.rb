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
  def number_of_children
    return @number_of_children
  end
  def age
    return @age
  end
  def pets_count
    return @pets.count
  end
  def add_pet(animal)
    @pets << animal
  end
  def remove_pet(animal)
    @pets.delete(animal)
  end
  def pet_with_index index
    return @pets[index]
  end
end