def consecutive_substrings(string)
  # type your code in here
  sub_strings = []
  char_list = string.split('')
  char_list.each_with_index do |char, index|
    sub_strings << char
    letter = char

    string[index + 1..-1].split('').each_with_index do |next_letter|
      letter += next_letter
      sub_strings << letter
    end
  end

  sub_strings
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']"
  print "=> " 
  print consecutive_substrings('abc')

  puts

  puts "Expecting: ['a']"
  print "=> " 
  print consecutive_substrings('a')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
