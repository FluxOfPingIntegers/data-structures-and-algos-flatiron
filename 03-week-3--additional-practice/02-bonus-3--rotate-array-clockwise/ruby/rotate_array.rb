def rotate_array(arr, k)
  # type your code in here
  if arr.length <= 1 || k <= 0
    arr
  else
    rotate_element = arr.pop
    new_arr = arr.unshift(rotate_element)
    rotate_array(new_arr, k - 1)
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [4, 1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3, 4], 1)

  puts

  puts "Expecting: [2, 3, 1]"
  print "=> "
  print rotate_array([1, 2, 3], 2)

  puts

  puts "Expecting: [1, 2, 3]"
  print "=> "
  print rotate_array([1, 2, 3], 3)
  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -if the length of the array is less than or equal to 1, or if the count is less than or equal to 0 return the array
  -else create variable *rotate_element equal to the last element of the array and mutate the array to exclude rotate_element
  -create a new variable *new_arr which is equal to an array consisting of rotate_element as the first element followed
   by the remainder of the argument array
  -return a recursive call of this method with the arguments new_arr and k - 1
=end
# And a written explanation of your solution
=begin
  If the array was empty, or only had one element I wanted to return the array.  If that wasn't the case I needed to
  get the last element of the argument array saved to a variable and remove it from the array, then I needed to add that
  element to the front of the array.  I then needed return the outcome of this method being called again with this new array
  and the count number being decremented by 1.  The result being that the count will eventually reach zero and the first if 
  statement will return the argument array.
=end
