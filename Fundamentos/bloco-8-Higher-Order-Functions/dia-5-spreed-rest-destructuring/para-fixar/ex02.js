const findBiggest = (...params) => params.sort((a, b) => b - a)[0]

console.log(findBiggest(0,1,2,99,445,78545,5))