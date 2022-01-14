def fibonacci(num)
  # type your code in here
  h = {0 => 0, 1 => 1}
  a = [0, 1]
  count = num + 1
  count.times { a.push(a.last + 1) }
  a.each do |current|
    if current == 0 || current == 1
      puts "Skipping"
    else
      h[current] = h[current - 2] + h[current - 1]
    end
  end
  h[num]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
=begin
  -create hash with first two key/values of fibonacci array, with they key representing the index and value representing the element
  -create an array with the first two elements being the first two indexes of the fibonacci array
  -add to this array through iteration an element for each index of the fibonacci array until the number of indexes are respesented
  -iterate through this array adding each element as a key for the hash except for the first 2, then add the previous two hash
    values to get the value for this newly added hash key.
  -return the hash at the key for which the provided number argument was for.
=end
# And a written explanation of your solution
=begin
  Using an array for this solve would be costly having to lookup the index for each element in order to compute the next one.
  I knew that the lookup time could be saved using a hash but still felt the need to create an array just to add the keys for
  the hash and conveniently execute a block which the key/value pairs I needed were added.  Then I simply returned the hash at
  the key value of the index the problem provided because at that point it was there.
=end
