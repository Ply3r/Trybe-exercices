const { readFileSync } = require('fs');

const getDbData = () => {
  const dataJson = readFileSync('./db/cep.json', 'utf-8');
  const data = JSON.parse(dataJson);
  return data;
}

const verifyIfExists = (cepParam) => {
  const CEPs = getDbData();
  const CEP = CEPs.find(({ cep }) => cep === cepParam);

  return CEP;
}

const verifyCEP = (cep) => {
  const regexCep = /\d{5}-?\d{3}/gm
  return regexCep.test(cep);
}

module.exports = { getDbData, verifyIfExists, verifyCEP }
