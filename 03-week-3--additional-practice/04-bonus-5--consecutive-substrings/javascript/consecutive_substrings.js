function consecutiveSubstrings(string) {
  // type your code here
  if (string.length <= 1) {return string.split('')}
  const characters = string.split('')
  const numberOfSubstrings = ({num, count}) => {return num > 0 ? numberOfSubstrings({num: num - 1, count: count + num}) : count}
  const subCount = numberOfSubstrings({num: characters.length, count: 0})

  const populateSubstringArr = ({subArr, count, nextCount, res}) => {
    if (subArr.length < subCount) {
      const currentElement = res ? characters[count] : subArr[subArr.length - 1] + characters[count]
      if (count === characters.length - 1) {
        return populateSubstringArr({subArr: subArr.concat([currentElement]), count: nextCount, nextCount: nextCount + 1, res: true})
      } else {
        return populateSubstringArr({subArr: subArr.concat([currentElement]), count: count + 1, nextCount: nextCount, res: false})
      }
    } else {
      return subArr
    }
  }
  return populateSubstringArr({subArr: [], count: 0, nextCount: 1, res: true})
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
