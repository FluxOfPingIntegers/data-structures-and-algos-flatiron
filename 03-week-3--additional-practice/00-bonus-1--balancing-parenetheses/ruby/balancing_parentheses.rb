def balancing_parentheses(string)
  # type your code in here
  string_chars = string.split('')
  f = 0
  b = 0
  string_chars.each do |char|
    if char == "("
      f += 1
    next
    else
      b += 1
    next
    end
  end
  f >= b ? greater = f : greater = b
  f <= b ? lesser = f : lesser = b
  if string_chars[0] == ")" && string_chars[0] != string_chars.last
    (greater - lesser) + 2
  else
    greater - lesser
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -split argument string into an array
  -iterate through the array, count the number of chars equal to '(' and save them to a variable, same as the chars equal to ')'
  -find which one of these two variables is greater and save it.  Find which one of these two variables is least and save it
  -if the opening char in the array is ')' and the last char is not equal to it, return greater - lesser + 2
  -else return greater - lesser
=end
# And a written explanation of your solution
=begin
  I wanted to create an array using the original string arument and count the arrays elements that are ')' and also count
  the ones equal to '('.  I wanted to determine which one of these counts was greater and lesser and save them to separate
  variables.  Then depending on the pattern of the array return either the difference of greater and lesser or the difference
  of greater and lesser + 2.  This would be dictated by if the opening character was ')' and the closing was was '('.
=end