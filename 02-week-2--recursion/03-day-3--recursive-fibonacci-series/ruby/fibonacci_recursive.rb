def fibonacci(n)
  # type your code in here
  if n == 0 || n == 1
    return n
  end
  fibonacci(n - 1) + fibonacci(n - 2)
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
  -if n < 2 return n
  -else decrease n by 1 and add it to n decreased by 2 until condition is met, calling the function recursively
=end
# And a written explanation of your solution
=begin
  Because I was only able to hold onto one number throughout this I needed to turn the problem into a series of 1 + 1 + 1...etc.
  The only way to store all of these ones was to make a condition at the start of the method that would return n if it were ever one
  However I also needed to account for if n was originally 0 so 0 needed to be returned if this was the case, hence the or statement.
  If I added two calls of this method together while decreasing n each time they were called I would eventually get the series of
  addition (1 + 1 + 1...etc) that I had hoped for.  Once all of these method calls had values the return would add them all together.
=end
