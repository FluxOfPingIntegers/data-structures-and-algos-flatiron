def find_shortest_string(arr)
  # type your code in here
  answer = (!!arr[0] ? arr[0] : "")
  arr.each do |element|
    if element.length < answer.length
      answer = element
    end
  end
  answer
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!

  # BENCHMARK HERE
end

# Please add your pseudocode to this file
=begin
  -create variable *answer equal to the first element in arr or an empty string
  -iterate through arr, test element string length, if element.length < answer.length, answer = element
  -return answer
=end
# And a written explanation of your solution
=begin
  I am creating a variable *answer set to the first element in arr or a blank string and testing its length against each
  element in the argument array.  If an elements length is greater answer I am assigning the blank steam variable
  to that element.  After this iteration is complete I am returning answer
=end