function rotateArray(arr, k) {
  // type your code here
  if (k <= 0 || arr.length <= 1) {
    return arr
  } else {
    const rotateElement = arr.pop()
    const newArr = [rotateElement, ...arr]
    const newK = k - 1

    return rotateArray(newArr, newK)
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
/*
  -if the length of the array is less than or equal to 1, or if the count is less than or equal to 0 return the array
  -else create variable *rotateElement equal to the last element of the array and mutate array to exclude rotateElement
  -create a new variable *newArr which is equal to an array consisting of rotateElement as the first element followed
   by the remainder of the argument array
  -create a new variable *newK which is equal to the k argument minus 1
  -return a recursive call of this function with the arguments newArr and newK
*/
// And a written explanation of your solution
/*
  If the array was empty, or only had one element I wanted to return the array.  If that wasn't the case I needed to
  get the last element of the argument array saved to a variable and remove it from the array, then I needed to add that
  element to the front of the array.  I then needed to decrement the count argument by 1 and return the outcome of this
  function being called again with this new array and new count number.  The result being that the count will eventually
  reach zero and the first if statement will return the argument array.
*/
