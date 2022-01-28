const express = require('express');
const { readFileSync } = require('fs');

const route = express.Router();

route.get('/post/:id', (req, res) => {
  const { id } = req.params;

  if (!id) 
    return res
      .status(401)
      .json({ message: 'post not found' });
  
  res.status(200).json({ message: `OK - id ${id}` });
})

route.get('/post', (_req, res) => {
  const getItens = readFileSync('../db/atividade3.json');
  const itens = JSON.parse(getItens)

  res
    .status(200)
    .json({ result: itens });
});

module.exports = route;