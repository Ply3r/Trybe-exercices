const exercicio1 = require('./exercicio-1');
const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const randomArray = new Array(3)
  .fill(0)
  .map(() => randomNumber());

exercicio1(...randomArray)
  .then((value) => console.log(`result: ${value}`))
  .catch((err) => console.log(err));

module.exports = randomArray;
