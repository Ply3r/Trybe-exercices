function hydrate(str) {
  let numbers = str.match(/\d+/gm).map(e => Number(e))
  return `${numbers.reduce((a,b) => a + b)} copos de água`
}


console.log(hydrate("1 cerveja"))