def recursive_search(arr, target)
  
  if arr.length == 0
    false
  elsif arr.slice!(0) == target
    true
  else
    recursive_search(arr, target)
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: true"
  puts "=>", recursive_search([1, 2, 3], 2)

  puts

  puts "Expecting: false"
  puts "=>", recursive_search([3, 2, 1], 4)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -test to see if arr is empty, if so return false
  -if the arr is not empty, delete the first element and compare it to the target, if there is a match return true
  -else call the recursive_search method again with the target and the shortened arr
=end
# And a written explanation of your solution
=begin
  In order to test each element of arr recursively I needed to shorten it each time and compare the element I was removing to
  the target.  If there was a match I needed to return true, if not I needed to continue this process.  Once arr had no more
  elements left to compare I needed to return false.
=end
