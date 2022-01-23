function fibonacci(n) {
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
      if (!!obj[`${n}`] || i == n + 3) {
        return obj[`${n}`]
      } else {
        return populateObj()
      }
  }

  return populateObj()
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
  -create an incremental function which adds keys to this hash
  -create another function which calls the incremental one and checks to see if the hash has the desired key yet
  -if the hash has the desired key return the desired key, else the function calls itself again.
*/
// And a written explanation of your solution
/*
  -I decided creating a hash would make for a faster solve than iterating constantly through an array. so first thing is I
  created a hash with keys for the first two index values for the fibonacci series.  I then made a function that incremented
  a variable representing the current and used this to add keys and values to this hash.  I then made another function which
  was recursive and would call this incrementing function, see if the hash had the desired key yet, if so return the desired
  key, if not call itself again.  I returned this function at the end of the  
*/
