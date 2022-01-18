function selectionSort(arr) {
  const answerArr = [];
  if (arr.length == 0 || arr.length == 1) {
    return arr
  } else {
    for (let i = arr.length; i > -1; i--) {
      const min = Math.min(...arr)
      const i = arr.indexOf(min);
      answerArr.push(min);
      arr.splice(i, 1);
      if (arr.length == 0) {
        return answerArr
      }
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
/*
  -create a blank array called answerArr
  -if arr.length == 0 or 1, return arr
  -else iterate through arr, declare a variable which is the value of the minimum element in the array called min
  -declare a variable which is the index of min in the array
  -add min to answerArr
  -destroy min within arr
  -if the length of arr is now 0, return answerArr.  Else repeat iteration until this condition is true.
*/
// And a written explanation of your solution
/*
  I needed to declare a separte array that I would add to as minimum elements were removed from the argument array.  I wanted to
  do this while iterating through the entire argument array just once.  In order to ensure this iteration was complete BEFORE I
  returned an answer, at the end of each iteration I checked to see if the argument array had any elements left.  If it did I
  had the iteration return the answer array as the final step of the iteration.
*/
