def reverse_string(str)
  # type your code in here
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
  -create a hash with key values of indexes of the array pointing to array elements
  -create a new blank array
  -iterate over the hash using a variable that you will decrement, this variable should start at the
   highest index of the has, so its initial value should be the original arrays length - 1, push these
   values into the new array as you iterate
  -return the joined new array
=end
# And a written explanation of your solution
=begin
  I believe mapping the string to an array is the first step to being able to iterate through each word of the string.
  Once this is done, having this array correspond to a hash will reduce the time of further iteration whilst I reverse
  its order.  This new order will be saved in a new array.  Once this array is converted back to a string that string
  should be returned.
=end