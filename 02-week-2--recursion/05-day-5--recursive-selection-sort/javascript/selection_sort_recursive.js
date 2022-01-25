function selectionSortRecursive(arr) {
  // type your code here
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  const min = Math.min(...arr)
  const i = arr.indexOf(min);
  arr.splice(i, 1)

  const result = selectionSortRecursive(arr);
  result.unshift(min);
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
/*
  -if the length of the argument array *arr is either 0 or 1 return arr
  -find the smallest value in arr, store it in a variable called *min
  -find the index of min within arr, store it in a variable called *i
  -remove min from arr
  -declare a variable *result which is the recursive return of this function being passed arr.unshift(min)
*/
// And a written explanation of your solution
/*
  with each recursion I am finding the lowest element within the array, assigning it to a variable and removing it
  I am then passing the shortened array to this function for recursion and assigning the result to a variable
  I am then returning this variable with the original minimum value placed at the begining of it.
*/