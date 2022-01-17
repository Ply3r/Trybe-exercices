const readfile = require('readline-sync');

const sortear = () => {
  const inputNumber = readfile.questionInt('Digite um numero');
  const random = Math.floor(Math.random() * 10);
  
  if (random === inputNumber) {
    console.log(`parabens vc acertou. ${inputNumber}, ${random}`)
  } else {
    console.log(`vc errou. ${inputNumber}, ${random}`)
  }
}

module.exports = sortear;
