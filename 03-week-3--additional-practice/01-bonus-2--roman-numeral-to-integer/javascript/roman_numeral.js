function romanNumeral(string) {
  // type your code here
  const strArr = string.split('')
  const numArr = strArr.map((char) => {
    switch (char) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      default:
        return 0;
    }
  })

  let switched = false
  const decArr = numArr.map((num, index) => {
    let switchNum = (!!numArr[index + 1] ? numArr[index + 1] : num)
    if (switchNum <= num && !switched) {
      return num
    } else if (switched) {
      switched = !switched
      return 0
    } else {
      switched = !switched
      return switchNum - num
    }
  })

  const decValueReducer = (previousValue, currentValue) => previousValue + currentValue

  return decArr.reduce(decValueReducer, 0)

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
/*
  -convert string to array
  -map array to numbers using character case matching
  -map this mapped array to a decimal array which evaluates all instances where an element is less than the next element
    if the element is less than the next element, return next element - element in the map, then return 0 for the next iteration
    else return the element to the map
  -add up all elements within this mapped array
*/
// And a written explanation of your solution
/*
  First I had to isolate each character in the argument string to an array.  Then I had to iterate through this array and using a
  case statement, create an array of values which was a translation of the roman numerals contained in the string array.  At that
  point I needed to find each instance in this map where an element was less than the following element, return the difference of
  that element from the following element if this was true, or return that element if it was not.  At this point I could reduce
  the remaining elements contained in this mapped array.
*/
