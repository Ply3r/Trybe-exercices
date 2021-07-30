function gerarMegasena() {
  let megaSena = []
  for(let c = 0; c < 6; c++){
    megaSena.push(Math.floor(Math.random() * 60 + 1))
  }
  return megaSena
}
function gerarApostas(n) {
  let megaSena = gerarMegasena()
  let array = []
  let arrayAcertos = []
  let acertosTotais = 0
  for(let c = 0; c < n; c++){
    let play = []
    for(let i = 0; i < 6; i++){
      play.push(Math.floor(Math.random() * 60 + 1))
    }
    array.push(play)
  }
  array.forEach(e => {
    let acertoPlay = 0
    for(let index of e){
      megaSena.forEach(megaNumber => megaNumber == index ? ( 
        acertosTotais++, 
        acertoPlay++) : '')
    }
    arrayAcertos.push(acertoPlay)
  })
  console.log(megaSena)
  console.log(array)
  console.log(`Acertos Totais: ${acertosTotais}`)
  array.forEach((e,i) => console.log(`Acertos Play ${i}: ${arrayAcertos[i]}`))
}
gerarApostas(3)