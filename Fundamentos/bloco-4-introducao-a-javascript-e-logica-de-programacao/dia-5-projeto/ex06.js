function highestCount(arr) {
  let obj = {}
  arr.forEach(e =>{
    let repeticoes = 0
    for(let index of arr) e == index ? repeticoes++ : ''
    obj[e] = repeticoes
  })
  return Object.values(obj)[Object.values(obj).length - 1]
}


console.log(highestCount([0, 0, 0]))