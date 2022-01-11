def find_first_duplicate(arr)
  # type your code in here
  matches = arr.map.with_index do |value, index|
    if value == arr[index + 1]
      index
    end
  end
  match_index = matches.select {|element| !!element}
  (match_index.length > 0 ? arr[match_index[0]] : -1)

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -create a map of the array containing the indexes of all the matching elements that occur at the next index
  -create another array that contains all the elements of this map that passed initial test.
  -make sure this new array has a length greater than 0, return the original array at the first index of this new array
=end
# And a written explanation of your solution
=begin
  I had to create an array of indexes in which a duplicate element is found in the original array that corresponds with the following
  index of the original array.  I then had to select out of this list to exclude false values (elements that had no duplicate or
  did not dupicate in sequence).  I then had to return the value of the original array at this arrays first index.  If there wasnt
  one, I needed to return -1. 
=end
