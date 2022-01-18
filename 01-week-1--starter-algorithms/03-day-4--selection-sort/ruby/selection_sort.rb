def selection_sort(arr)
  # type your code in here
  if arr.length == 0 || arr.length == 1
    arr
  else
    arr_copy = arr
    answer = []
    while arr_copy.length > 0 do
      min = arr_copy.min
      i = arr_copy.index(min)
      arr_copy.delete_at(i)
      answer.push(min)
    end
  answer
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# Please add your pseudocode to this file
=begin
  -if arr.length equals 0 or 1 return arr
  -else, create copy of arr *arr_copy, create empty array *answer
  -while arr_copy's length is more than 0 push arr_copy's minimum element to answer,
   then delete the element at that index in arr_copy
  -return answer
=end
# And a written explanation of your solution
=begin
  I wanted to create a copy of the argument and push each minimum value to an answer array while destroying the element at that index
  within the copy of the argument array.  At the end I wanted to return the answer array.
=end
