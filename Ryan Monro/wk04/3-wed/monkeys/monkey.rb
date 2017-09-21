class Monkey
  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    @foods_eaten << food
  end

  def introduce
    puts "Hi my name is #{@name}. I am a #{@species}. I had #{@foods_eaten.join(' and ')} for brunch."
  end
end