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
# And a written explanation of your solution
