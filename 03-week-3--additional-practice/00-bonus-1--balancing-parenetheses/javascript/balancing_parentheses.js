function balancingParentheses(string) {
  // type your code here
  let obj = {
    '(': 0,
    ')': 0,
    'strArr': string.split('')
  }

  const incrementCount = (stringArr) => {
    let result = false
    stringArr.forEach((element, index) => {
      if (element === "(" || element === ")") {
        obj[`${element}`] = obj[`${element}`] + 1
      }
      if (stringArr.length === 0 || index === stringArr.length - 1) {
        result = obj
      }
    })
    return (!!result ? result : incrementCount())
  }

  const evaluateParentheses = (obj) => {
    let stringArr = obj["strArr"]
    let greater = (!!obj["("] >= obj[")"] ? obj["("] : obj[")"])
    let lesser = (!!obj["("] <= obj[")"] ? obj["("] : obj[")"])
    if (
      stringArr[0] === '(' && stringArr[0] !== stringArr[stringArr.length - 1] ||
      stringArr.length == 1 ||
      stringArr[0] === stringArr[stringArr.length - 1]
      ) {
      return greater - lesser
    } else if (stringArr[0] === ')' && stringArr[0] !== stringArr[stringArr.length - 1]) {
      return (greater - lesser) + 2
    } else {
      return 0
    }
  }
  
  return (string.length > 0 ? evaluateParentheses(incrementCount(obj["strArr"])) : 0)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
/*
  -declare a javascript object variable, with a key of '(' pointing initially to zero, and a key of ')' pointing initially to zero
  -split each character in the argument string into an element of an array
  -iterate through the array, use each element to increment the count on the corresponding object key.
  -create a function that takes in the object, assign a variable equal to the key with the largest count, and a variable
   to a key with the lesser count.
  -return the result of the higher counter variable minus the lesser count variable at the end of said function.
  -return that function call.
*/
// And a written explanation of your solution
/*
  
*/
