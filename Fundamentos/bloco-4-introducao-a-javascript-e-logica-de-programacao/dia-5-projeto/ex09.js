function encode(str) {
  str = str.split('')
  let result = ''
  let vogais = 'aeiou'.split('')
  str.forEach(e => {
    vogais.forEach((index,i) => e == index ? e = i+1 : '')
    result += e
  })
  return result
}
console.log(encode("hi there!"))


function decode(str) {
  str = str.split('')
  let result = ''
  let vogais = 'aeiou'.split('')
  str.forEach(e => {
    vogais.forEach((index,i) => e == i+1 ? e = index : '')
    result += e
  })
  return result
}

console.log(decode('h3 th2r2!'))

