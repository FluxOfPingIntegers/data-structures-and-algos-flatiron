function recursiveCount(num = 0) {
  // type your code here
  const addCount = (n) => {
    if (n < 9) {
      console.log(n)
      addCount(n + 1)
    } else {
      console.log(n)
      return n
    }
    return n
  }

  addCount(num)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
