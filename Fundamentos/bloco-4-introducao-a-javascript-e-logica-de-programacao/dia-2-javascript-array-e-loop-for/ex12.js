let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = []
numbers.forEach((e,i) => {
  numbers[i + 1] != undefined ? result.push(e * numbers[i + 1]) : result.push(e * 2)
})

console.log(result)