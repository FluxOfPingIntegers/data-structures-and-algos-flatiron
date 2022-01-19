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
  -iterate through arr, test element string length, if element.length > answer, answer = element
   if element === arr.last return answer
*/
// And a written explanation of your solution
/*
  I am creating a blank string and testing its length against each element in the argument array.  If an elements length
  is greater than the blank string variable I am assigning the blank steam variable to that element.  On the last iteration I
  am returning the variable that was originally blank.
*/
