const readfile = require('readline-sync');

const height = readfile.questionFloat('Qual sua altura?: ');
const kg = readfile.questionFloat('Qual seu peso?: ');
const imc = kg / (height ** 2);


console.log(`Seu imc é ${imc.toFixed(2)}`);
console.log('| IMC                                       | Situação                  |' +
'\n| ----------------------------------------- | ------------------------- |' +
'\n| Abaixo de 18,5                            | Abaixo do peso (magreza)  |' +
'\n| Entre 18,5 e 24,9                         | Peso normal               |' +
'\n| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |' +
'\n| Entre 30,0 e 34,9                         | Obesidade grau I          |' +
'\n| Entre 35,0 e 39,9                         | Obesidade grau II         |' +
'\n| 40,0 e acima                              | Obesidade graus III e IV  |');

