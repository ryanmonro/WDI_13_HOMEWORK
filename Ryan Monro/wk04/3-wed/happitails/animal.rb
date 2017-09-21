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
  def age
    return @age
  end
  def gender
    return @gender
  end
  def species
    return @species
  end
  def add_toy toy
    @toys << toy
  end
  def toy_count
    return @toys.count
  end
  def toy_with_index index
    return @toys[index]
  end
end
