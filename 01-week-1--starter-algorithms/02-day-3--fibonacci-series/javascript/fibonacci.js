function fibonacci(num) {
  // type your code here
  let obj = {
    "0": 0,
    "1": 1
  }

  let i = 1

  const incrementObj = (index) => {
    const previousIndex = (index - 1)
    const nextIndex = (index + 1)
    obj[`${nextIndex}`] = obj[`${previousIndex}`] + obj[`${index}`]
    return nextIndex
  }

  const populateObj = () => {
      i = incrementObj(i)
      if (!!obj[`${num}`] || i == num + 3) {
        return obj[`${num}`]
      } else {
        return populateObj()
      }
  }

  return populateObj()




  /*
  if (num == 0 || num == 1) {return num}
  if (num == 2) {return 1}
  let numberSeries = [0, 1]

  const incrementSeries = () => {
    const nextElement = numberSeries[numberSeries.length - 1] + numberSeries[numberSeries.length - 2]
    numberSeries.push(nextElement) 
  }

  const populateNumberSeries = () => {
    let numberOfIncrements = num - 2
    for (let i = numberOfIncrements; i != 0; i--) {
      incrementSeries()
      if (i == num)
    }
  }
  const reduceArray = (arr = populateNumberSeries()) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return arr.reduce(reducer) + 1
  }
  return reduceArray(populateNumberSeries())
  */
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/*
  -create hash with keys/values representing first two numbers of fibonacci series
  -create a loop with a counter beginning at 2 set a variable on each iteration to one less than this counter
  -create a new value inside the loop that sums hash[counter -2] to hash[counter - 1] and sets it to hash[counter]
  -if counter == num return hash[num] else increment counter 
*/
// And a written explanation of your solution
