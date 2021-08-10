const longestWord = str => {
  let arr = str.split(' ')
  let maiorPalavra = ''
  arr.forEach(e => {
    maiorPalavra.length < e.length ? maiorPalavra = e : ''
  })
  return maiorPalavra
}







console.log(longestWord("Antônio foi no banheiro e não sabemosaaaaaaa o que aconteceu"))