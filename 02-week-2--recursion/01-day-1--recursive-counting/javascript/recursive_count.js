function recursiveCount(num = 0) {
  // type your code here
  const addCount = (n) => {
    if (n < 9) {
      console.log(n)
      addCount(n + 1)
    } else {
      console.log(n)
      return n
    }
    return n
  }

  addCount(num)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
/*
  -define a function with an if statement
  -if argument is below top number of count, then print the argument followed by calling the function again with the arument + 1
  -else print the argument followed by returning the argument
  -outside of the if statement return the argument by default
  -call the function with the initial argument
*/
// And a written explanation of your solution
/*
  I wanted to print the value of the argument each time as well as increment it and call the function again if the maximum value
  had not been reached yet.  At the end of the function I wanted to return the value whether the condition was met or not.
*/
