class Animal
  def initialize(name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end
  def name
    return @name
  end
  def species
    return @species
  end
  def add_toy toy
    @toys << toy
  end
end
