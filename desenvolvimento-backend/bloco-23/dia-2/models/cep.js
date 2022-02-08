const axios = require('axios');
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

const verifyCEP = async (cep) => {
  const regexCep = /\d{5}-?\d{3}/gm
  if (!regexCep.test(cep)) return false;

  const isReal = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.data)
    .then(({ erro }) => erro ? false : true);

  return isReal;
}

module.exports = { getDbData, verifyIfExists, verifyCEP }
