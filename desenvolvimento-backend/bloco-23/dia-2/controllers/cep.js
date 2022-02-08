const { writeFileSync } = require('fs');
const { verifyIfExists, getDbData } = require('../models/cep.js');
const { verifyCEP } = require('../models/cep.js');

const getOne = (req, res) => {
  const { cep: cepParam } = req.params;

  if (!verifyCEP(cepParam))
    return res.status(400).json({ error: { code: "invalidData", message: "CEP inválido" } })

  const CEP = verifyIfExists(cepParam);

  if (!CEP) {
    return res.status(404).json({ error: { code: "notFound", message: "CEP não encontrado" } })
  }

  res
    .status(200)
    .json(CEP)
}

const insertOne = async (req, res) => {
  const body = req.body
  const dbData = getDbData();
  const newData = [...dbData, body];

  writeFileSync('./db/cep.json', JSON.stringify(newData));

  res
    .status(201)
    .json({ message: 'OK' })
}

module.exports = { getOne, insertOne }
