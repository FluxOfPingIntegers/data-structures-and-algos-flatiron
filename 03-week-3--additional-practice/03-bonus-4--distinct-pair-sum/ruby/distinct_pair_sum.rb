def distinct_pair_sum(arr, k)
  # type your code in here
  arr_hash = {}
  index_arr = (0...(arr.length - 1))

  index_arr.each do |i|
    next_element = arr[i + 1]

    if arr[i] + next_element == k &&
      !arr_hash.key?(next_element) && 
      !arr_hash.key?(arr[i])
      arr_hash[arr[i]] = [arr[i], next_element]
    end
  end

  arr_hash.values
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [[1, 1], [2, 0]]"
  print "=> "
  print distinct_pair_sum([0, 1, 1, 2, 0, 1, 1], 2)

  puts

  puts "Expecting: [[2, 8]]"
  print "=> "  
  print distinct_pair_sum([3, 4, 2, 1, 5, 2, 8, 2], 10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -create hash to hold elements as key/values called *arr_hash
  -create array to hold indexes of arr called *index_arr
  -iterate over index_arr using *i as the current index
  -if arr[i] + arr[i + 1] = k and arr_hash[arr[i]] is false and arr_hash[arr[i +1]] is false, arr_hash[arr[i]] = [arr[i], arr[i + 1]]
  -return all the values of arr_hash (there will be no duplicates since they're constantly overwritten)
=end
# And a written explanation of your solution
=begin
  I needed to create a hash in order to store all all of the elements within arr that add up to k.  I also needed to create an
  array that contained all of the indexes in arr as elements.  I then iterated over the index array and tested if the current
  index element in arr added to the next index element in arr would equal k.  If they did I used the current index element in
  arr as the key in the hash and gave it the value of [current, next].  Once this iteration was completed I returned the values
  within the hash.
=end