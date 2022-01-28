const express = require('express');
const { writeFileSync, readFileSync } = require('fs');

const route = express.Router();

const verifyTeam = (req, res, next) => {
  const {
    name,
    initials,
    country,
  } = req.body;

  const regexName = /[\w]{5,}/gmi
  const regexInitials = /[A-Z]{3}/gm
  const regexCountry = /[A-Z]{3}/gm

  let valid = true;
  if (!regexName.test(name)) valid = false;
  if (!regexInitials.test(initials)) valid = false;
  if (!regexCountry.test(country)) valid = false;

  if (!valid)
    return res.status(400).json({ message: 'Invalid Data!' })

  next();
};

route
  .route('/teams')
  .post(verifyTeam, (req, res) => {
    const { name, initials, country } = req.body;

    const newTeam = { name, initials, country };
    writeFileSync('db/atividade4.json', JSON.stringify(newTeam));

    res.status(200).json({ message: 'Team created' });
  })
  .get((_req, res) => {
    const teamsJson = readFileSync('db/atividade4.json', 'utf-8');
    const teams = JSON.parse(teamsJson);

    res
      .status(200)
      .json({ teams });
  });



module.exports = route;
