const longestWord = str => {
  let arr = str.split(' ')
  return arr.sort((a, b) => b.length > a.length ? 1 : -1)[0]
}







console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))