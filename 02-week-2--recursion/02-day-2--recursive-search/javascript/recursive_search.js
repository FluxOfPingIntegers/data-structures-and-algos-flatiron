function recursiveSearch(arr, target) {
  // type your code here
  let i = 0

  const recursiveTest = (index) => {
    while (index < arr.length) {
      if (arr[index] == target) {
        return true
      } else {
        return recursiveTest(i++)
      }
    }
    return false
  }

  return recursiveTest(i)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
/*
  -declare a variable *i equal to zero
  -create a function that has a while loop that will run until i is less than the length of arr
  -create an if statement within the while loop, if arr[i] === target return true, else increment i and call the function again
  -outside of this while loop (and if else statement) inside of the function on the last line, return false
*/
// And a written explanation of your solution
/*
  I need to iterate through arr testing if any element matches the target using recursion.  The simplest way to do this is to
  set a counter variable outside of the recursive function and increment it each time the function runs.  If the tested element
  ever matches the target, return true.  If each element is tested within arr and none match the target, return false.  
*/
