const velocidade = require('./velocidade');
const imc = require('./imc');
const sorteio = require('./sorteio');
const readfile = require('readline-sync');

console.log('1. imc | 2. velocidade | 3. sorteio')
const answer = readfile.questionInt('digite sua escolha')

switch (answer) {
  case 1:
    imc();
  case 2:
    velocidade();
    case 3:
    sorteio();
  default:
    console.log('invalido')
}