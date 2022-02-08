const { verifyCEP, verifyIfExists } = require('../models/cep.js');

const verifyBody = async ({ body }, res, next) => {
  const { 
    cep,
    logradouro,
    bairro,
    localidade,
    uf
  } = body;
  const values = [cep, logradouro, bairro, localidade, uf];

  if (values.some((value) => !value))
    return res.status(400).json({ error: { code: "invalidData", message: "Campo não prenchido" } });

  const cepIsValid = await verifyCEP(cep)
  if (!cepIsValid)
    return res.status(400).json({ error: { code: "InvalidData", message: "CEP Invalido!" } })

  if (verifyIfExists(cep))
    return res.status(409).json({ error: { code: "Conflict", message: "Ja existe esse CEP cadastrado!" } })

  next();
}

module.exports = { verifyBody }
