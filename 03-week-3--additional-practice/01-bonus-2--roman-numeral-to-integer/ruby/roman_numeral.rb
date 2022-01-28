def roman_numeral(string)
  # type your code in here
  num_arr = string.split('').map do |char|
  case char
    when 'I'
      1
    when 'V'
      5
    when 'X'
      10
    when 'L'
      50
    when 'C'
      100
    when 'D'
      500
    when 'M'
      1000
    end
  end

  switched = false
  next_index = 0
  dec_arr = num_arr.map do |num|
    next_index += 1
    !!num_arr[next_index] ? next_num = num_arr[next_index] : next_num = num
    if next_num <= num && !switched
      num
    elsif switched
      switched = !switched
      0
    else
      switched = !switched
      next_num - num
    end
  end
  dec_arr.sum

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 1"
  puts roman_numeral('I')

  puts

  puts "Expecting: 9"
  puts roman_numeral('IX')

  puts

  puts "Expecting: 402"
  puts roman_numeral('CDII')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -convert string to array
  -map array to numbers using character case matching
  -map this mapped array to a decimal array which evaluates all instances where an element is less than the next element
    if the element is less than the next element, return next element - element in the map, then return 0 for the next iteration
    else return the element to the map
  -add up all elements within this mapped array
=end
# And a written explanation of your solution
=begin
  First I had to isolate each character in the argument string to an array.  Then I had to iterate through this array and using a
  case statement, create an array of values which was a translation of the roman numerals contained in the string array.  At that
  point I needed to find each instance in this map where an element was less than the following element, return the difference of
  that element from the following element if this was true, or return that element if it was not.  At this point I could reduce
  the remaining elements contained in this mapped array.
=end
