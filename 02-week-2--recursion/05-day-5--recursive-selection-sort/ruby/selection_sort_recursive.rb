def selection_sort_recursive(arr)
  # type your code in here
  if arr.length == 0 || arr.length == 1
    arr
  else
    max = arr.max
    index = arr.index(max)
    arr.slice!(index)
    new_arr = selection_sort_recursive(arr)
    new_arr.push(max)
  end

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort_recursive([3, -1, 5, 2])

  puts

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -if the length of the argument array is equal to 0 or 1 return the argument array
  -else assign the highest element in the argument array *arr to a variable *max,
  -find the index of max within arr and assign it to a variable *index
  -remove that index from arr
  -assign a variable *new_arr to the return of this function using the now shortened arr as the argument
  -return new_arr with the previously assignmed maximum value variable max at the end.
=end
# And a written explanation of your solution
=begin
  If the arrays length was either 0 or 1 I had to immediately return that array.  If that wasn't the case, with each recursion I
  needed to find the maximum value and assign it to a variable, remove that maximum value from the array, assign a new variable
  using a recursion of this function with the now shortened original argument array, and return this new array variable with the
  previously defined maximum element at the end.
=end
