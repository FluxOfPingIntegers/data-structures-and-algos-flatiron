function reverseString(str) {
  // type your code here
  const strArray = str.split("")
  let strHash = {}
  strArray.forEach((value, index) => {
    strHash[index] = value
  })
  reverseStrArray = []
  for (i = strArray.length - 1; i >= 0; i--) {
    reverseStrArray.push(strHash[i])
  }

  return (!!strArray.length > 0 ? reverseStrArray.join("") : str)
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/*
  -take in a string
  -split string into an array with an index for each character
  -map this array to a hash, with the indexes being the keys
  -map this hash back to an array, with the keys being the indexes in reverse order
*/

// And a written explanation of your solution
/*
  The initial string will have to be iterated over in order to be broken into an array, this array will be
  iterated over again in order to be turned into a hash, this hash will then be iterated over again in order
  to be transformed back into an array.  Once this final array is merged back into a string this string will be
  returned.  I believe this solution will always involve this many iterations no matter how long the string is.
*/
