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
# And a written explanation of your solution
