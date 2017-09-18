print "Enter filename: "
filename = gets.chomp
num_lines = IO.readlines(filename).count
puts num_lines.to_s + " line(s)"