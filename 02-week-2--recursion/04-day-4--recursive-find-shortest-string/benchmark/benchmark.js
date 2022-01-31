// Paste your iterative and recursive solutions in this file
//iterative
function findShortestString(arr) {
  let answer = (!!arr[0] ? arr[0] : "")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < answer.length) {answer = arr[i]}
    if (i === arr.length - 1) {return answer}
  }
}

//recursive
function findShortestStringRecursive(arr) {
  if (arr.length === 0) {
    return ''
  } else if (arr.length === 1) {
    return arr[0]
  } else {
    const firstElement = arr.shift()
    const areLess = element => element.length < firstElement.length
    return (arr.some(areLess) ? findShortestStringRecursive(arr) : firstElement )
  }
}
// And then calculate their average run times to compare them.






function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}
