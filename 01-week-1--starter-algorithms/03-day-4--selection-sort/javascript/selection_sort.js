function selectionSort(arr) {
  // type your code here
  /*
  if (arr.length == 0 || arr.length == 1) {
    return arr
  } else {
    return arr.sort(function(a, b) {
      return a - b
    })
  }
  */

  const populateKeyValues = () => {
    let i = 0
    const obj = {}
    arr.forEach((element) => {
      obj[element] = i
      if (i == arr.length - 1) {
        return sortKeyValues(obj)
      } else {
        i++
      }
    })
  }

  const sortKeyValues = (obj) => {
    let i = 1
    arr.forEach((element) => {
      const next = (!!arr[i] ? arr[i] : false )
      if (next) {
        if (element < next && obj[element] > obj[next]) {
            let lesserIndex = obj[next]
            let greaterIndex = obj[element]
            obj[element] = lesserIndex
            obj[next] = greaterIndex
            i++
        }
      } else {
        return objToIndexObj(obj)
      }
    })
  }

  const objToIndexObj = (obj) => {
    let indexObj = {}
    arr.forEach(value => {
      indexObj[obj[value]] = value
      if (obj[value] == arr.length - 1) {
        return indexObjToArray(indexObj)
      }
    })
  }

  const indexObjToArray = (indexObj) => {
    let answerArr = []
    for (let i = 0; i == arr.length; i++) {
      answerArr.push(indexObj[i])
      if (i == arr.length - 1) {
        return answerArr
      }
    }
  }

  return populateKeyValues()
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
