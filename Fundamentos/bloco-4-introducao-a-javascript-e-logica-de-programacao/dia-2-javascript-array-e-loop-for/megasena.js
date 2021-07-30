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
  for(let c = 0; c < n; c++){ array.push(gerarMegasena()) }
  array.forEach(e => {
    let acertoPlay = 0
    for(let index of e){ megaSena.includes(index) ?(acertosTotais++, acertoPlay++) : '' }
    arrayAcertos.push(acertoPlay)
  })
  console.log(megaSena)
  console.log(`Acertos Totais: ${acertosTotais}`)
  array.forEach((e,i) => arrayAcertos[i] == 6 ? console.log(`Acertos Play ${i}: ${arrayAcertos[i]}`) : '')
}
gerarApostas(1000000)