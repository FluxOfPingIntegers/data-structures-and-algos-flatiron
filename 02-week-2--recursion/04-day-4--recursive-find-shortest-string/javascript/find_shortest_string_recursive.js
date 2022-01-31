function findShortestStringRecursive(arr) {
  // type your code here
  if (arr.length === 0) {
    return ''
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    const firstElement = arr.shift()
    const areLess = element => element.length < firstElement.length
    return (arr.some(areLess) ? findShortestStringRecursive(arr) : firstElement )
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
/*
  -if arr has no elements, return an empty string
  -if arr only has one element. return that element
  -else remove the first element of arr, and set it to a variable *firstElement
  -iterate through the remaining elements of arr testing each of their string lengths against the firstElements string length
  -if some of them are less, run the function again passing in the shortened arr
  -else return firstElement
*/
// And a written explanation of your solution
/*
  I knew I had to shorten the length of arr with each recursion and use the first elements length as the test case for the remaining
  elements lengths.  If there was ever a time when no elements left in arrs lengths were less than the first (removed) element, I
  would return that first element since it would be the shortest string.  If there were elements with less characters in the string
  I would repeat the function over again until the first element was that of the shortest string.
*/
