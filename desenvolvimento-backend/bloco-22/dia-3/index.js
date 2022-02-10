const { writeFileSync } = require('fs');

const verifyNumber = (num) => {
  if (typeof num !== 'number') return 'o valor deve ser um número'
  if (!num) return 'neutro';
  return num > 0 ? 'positivo' : 'negativo';
}

const escreverArquivo = (file, message) => {
  try {
    writeFileSync(file, message);
    return "OK"
  } catch (err) {
    return "ERROR"
  }
}

module.exports = { verifyNumber, escreverArquivo };
