function fibonacci(num) {
  // type your code here
  let obj = {
    0: 0,
    1: 1
  }

  

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
// And a written explanation of your solution
