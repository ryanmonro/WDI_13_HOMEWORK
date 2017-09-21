print "Enter filename: "
filename = gets.chomp
num_lines = IO.readlines(filename).count
puts "#{num_lines} line(s)"