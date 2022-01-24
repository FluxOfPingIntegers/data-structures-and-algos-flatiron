def find_shortest_string_recursive(arr)
  # type your code in here
  if arr.length == 0
    ''
  elsif arr.length == 1
    arr[0]
  else
    first_element = arr.slice!(0)
    (arr.any? {|element| element.length < first_element.length} ? find_shortest_string_recursive(arr) : first_element)
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string_recursive(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string_recursive(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string_recursive(['flower', 'juniper', 'lily', 'dandelion'])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -if arr has no elements, return an empty string
  -if arr only has one element. return that element
  -else remove the first element of arr, and set it to a variable *first_element
  -iterate through the remaining elements of arr testing each of their string lengths against the first_elements string length
  -if some of them are less, run the function again passing in the shortened arr
  -else return first_element
=end
# And a written explanation of your solution
=begin
  I knew I had to shorten the length of arr with each recursion and use the first elements length as the test case for the remaining
  elements lengths.  If there was ever a time when no elements left in arrs lengths were less than the first (removed) element, I
  would return that first element since it would be the shortest string.  If there were elements with less characters in the string
  I would repeat the function over again until the first element was that of the shortest string.
=end