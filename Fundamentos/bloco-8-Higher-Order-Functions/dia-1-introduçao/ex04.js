function testCorrection(arrR, arrT) {
  let certas = 0
  let erradas = 0
  let NaoMarcada = 0
  let pontuacao = 0
  arrR.forEach((e,i) => {
    if(e === arrT[i]) {
      certas += 1
      pontuacao += 1
    }else if(arrT[i] === 'N.A'){
      NaoMarcada += 1
    }else {
      erradas += 1
      pontuacao -= 0.5
    }
  })
  return `Pontuação: ${pontuacao}\nCertas: ${certas}\nErradas: ${erradas}\nignoradas: ${NaoMarcada}`
}






function verificator(correct, test, func) {
  return func(correct, test)
}



const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(verificator(RIGHT_ANSWERS, STUDENT_ANSWERS, testCorrection))