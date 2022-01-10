def reverse_string(str)
  # type your code in here
  str_array = str.split("")
  reversed_str = ""
  str_array.each do |char|
    reversed_str = char + reversed_str
  end
  reversed_str
end


if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts 

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -take in a string, convert it to an array
  -declare a variable as an empty string
  -iterate over the created array, adding each element to the start of the empty string variable and redefining that
   variable
  -return the variable
=end
# And a written explanation of your solution
=begin
  creating an array of the string seems like the easiest way to iterate over the characters of the string.
  at first I thought this array would then have to be converted to a hash in order to take advantage of hash
  lookup times, and then initiate another "reversed_array" and use a counter to iterate across the keys of the hash
  using a while loop and assigning these keys from greatest to least to the reversed_array.  Then return the joined
  reversed array.
=end