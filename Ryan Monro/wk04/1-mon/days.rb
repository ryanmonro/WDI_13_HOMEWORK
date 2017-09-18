# create an array of the days of the week
days_of_the_week = ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

# remove Sunday from last position and move it to first position
days_of_the_week.rotate!(-1)

# create a new array of the days of the week with two inner arrays
weekend = []
weekend.push days_of_the_week.pop
weekend.push days_of_the_week.shift
days = [weekend, days_of_the_week]

# remove either weekdays or weekends
days.shift

# sort remaining days alphabetically
days.first.sort!

puts days
