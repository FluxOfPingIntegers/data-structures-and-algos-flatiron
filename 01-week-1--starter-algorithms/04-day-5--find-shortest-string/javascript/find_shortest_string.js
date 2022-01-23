function findShortestString(arr) {
  // type your code here
  let answer = (!!arr[0] ? arr[0] : "")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < answer.length) {answer = arr[i]}
    if (i === arr.length - 1) {return answer}
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
/*
  -create variable *answer equal to an empty string
  -iterate through arr, test element string length, if element.length < answer.length, answer = element
   if element === arr.last return answer
*/
// And a written explanation of your solution
/*
  I am creating a variable *answer set to the first element in arr or a blank string and testing its length against each
  element in the argument array.  If an elements length is less than answer I am assigning the value of answer
  to that element.  If the current element in the iteration is the last one of the array, I'm returning answer
*/
