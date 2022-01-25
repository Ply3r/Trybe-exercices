const exercicio1 = require('./exercicio-1');
const randomArray = require('./exercicio-2');

const exercicio3 = async () => {
  try {
    const result = await exercicio1(...randomArray)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
};

exercicio3()