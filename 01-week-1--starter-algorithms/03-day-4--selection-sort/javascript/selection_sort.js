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
  -create a blank array
  -fill this array with elements representing indexes that is equal in length to the argument array
  -create a blank object
  -create a variable, set it to zero
  -iterate through the argument array, assign each key using elements from the created array and the values using
   the argument array
  -create another blank array
  -create a function that finds the lowest value in the hash if the value is true, pushes that number to the array, and 
   sets that hash keys value to false.
  -return this new array
*/
// And a written explanation of your solution
