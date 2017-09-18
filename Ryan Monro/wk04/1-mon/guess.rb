puts "Guess My Number"
puts "---------------"
print "Enter difficulty (1-10,000): "
difficulty = gets.to_i
answer = Random.rand(difficulty).to_i

loop do
  print "Enter your guess: "
  guess = gets.to_i
  if guess == answer
    break
  elsif guess > answer
    print "Wrong, guess lower. "
  elsif guess < answer
    print "Wrong, guess higher. "
  end
end

puts "Congratulations!"