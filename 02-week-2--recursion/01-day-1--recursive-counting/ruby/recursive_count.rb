def recursive_count(num = 0)
  # type your code in here
  puts num
  if num < 9
    recursive_count(num + 1)
  else
    nil
  end
end

if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
=begin
  -print num
  -if num is less than max count, call recursive_count(num + 1)
  -else return nil
=end
# And a written explanation of your solution
=begin
  I printed num and then checked to see if the value was the maximum count yet
  if it wasn't I incremented num and called the method again, if it was I simply returned nil
=end
