function findFirstDuplicate(arr) {
  // type your code here
  const findMatchIndex = element => arr.indexOf(element)

  const matchTest = mappedArray => mappedArray.filter(indexValue => indexValue !== -1)

  const firstMatch = filteredArray => filteredArray.find((element, index) => element == filteredArray[index + 1])

  const matchFind = filteredArray => filteredArray.length > 1 ? arr[firstMatch(filteredArray)] : -1

  const arrayMatchFinder = arr => matchFind(matchTest(arr.map(element => findMatchIndex(element))))

  return arrayMatchFinder(arr)    
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/*
  -map the indexes of elements within the array that match, if no match is given the value for that elements index in the map will be -1
  -filter out this map so that it contains only elements that are NOT -1
  -if this filtered map has a length of 0 (no elements that are not of index -1) return -1, else return the value of the original
   array at the index of the first value within the filtered map.
*/
// And a written explanation of your solution
/*
  In order to overcome the synchronus nature of javascript I had to create multiple functions that broke the solution down into steps.
    each one called another one with the desired result being given at the end.  First I created an array of the indexes of all the
    matches within an array.  If there were none I would return -1 but if their were multiple matches I had to call yet another
    function that found the first index that repeated one after the other.  I would then use this index value as the return index
    of the initial array.
*/