function distinctPairSum(arr, k) {
  // type your code here
  if (arr.length <= 1) {
    return []
  }

  let arrObj = {}
  const populateArrObj = (count = 0) => {
    if (count === arr.length) {
      return arrObj
    } else {
      arrObj[`${arr[count]}`] = arr[count] !== 0 ? arr[count] : true
      return populateArrObj(count += 1)
    }
  }

  const distinctPairSumArr = ({arrObj, sumArr, count}) => {

    const hasDuplicate = element => arr.indexOf(element) !== arr.lastIndexOf(element)

    const element = !!arr[count] ? arr[count] : false
    const value = !!element ? k - element : false
    const duplicateTest = element !== value ? true : hasDuplicate(element)

    const newSumArr = !!arrObj[`${element}`] &&
     !!arrObj[`${value}`] &&
     duplicateTest ? sumArr.concat([[element, value]]) : sumArr

    const newArrObj = !!arrObj[`${element}`] &&
     !!arrObj[`${value}`] ? Object.assign(arrObj, {[element]: false}, {[value]: false}) : arrObj

    if (count === arr.length) {
      return (k === 0 && hasDuplicate(k) ? sumArr.concat([[0, 0]]) : sumArr)
    } else {
      return distinctPairSumArr({arrObj: newArrObj, sumArr: newSumArr, count: count + 1})
    }
  }

  return distinctPairSumArr({arrObj: populateArrObj(), sumArr: [], count: 0})
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
/*
  -if arr has 1 or less elements in it.  return empty array.
  -create new object called *arrObj, iterate over arr adding each element as the key/value to arrObj, if element is 0 value is true.
  -iterate over over arr once again using arrObj, a counter called *count, and a sum array you will return called *sumArr
   within each iteration find out if k - arr[count] is present in arrObj, if it is add [arr[count], k - arr[count]] to sumArr
   also test each element for duplicates within arr incase arr[count] is half of k *the total you're seeking
  -once count is equal to arr.length, return sumArr
*/
// And a written explanation of your solution
/*
  I wanted to create an object representing elements in arr to reduce lookup times.  I knew I had to build the answer through
  recursion in order for each iteration to finish before the next one began.  Special test/considerations had to be taken in
  the case that k was 0 or if there were duplicates within arr.
*/
