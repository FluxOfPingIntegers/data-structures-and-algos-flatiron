function distinctPairSum(arr, k) {
  // type your code here
  let obj= {}
  const populateArrObj = () => {arr.forEach((element, index) => {
    obj[`${element}`] = element
    if (index === arr.length - 1) {
      console.log(obj)
      return obj
    }
    })
  }

  const distinctPair = (arrObj = populateArrObj()) => {
    return arr.map((element) => {
      const value = k - element
      if (!!arrObj[`${element}`] && !!arrObj[`${value}`]) {
        arrObj[`${element}`] = false
        arrObj[`${value}`] = false
        return [element, value]
      }
    })
  }

  return distinctPair()
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

*/
// And a written explanation of your solution
