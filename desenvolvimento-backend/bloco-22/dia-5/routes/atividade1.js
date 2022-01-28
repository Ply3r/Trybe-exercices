const express = require('express');
const router = express.Router();
const { writeFileSync, readFileSync } = require('fs');
const generateToken = require('../generateToken');

const verifyUser = (req, res, next) => {
  const { 
    username, 
    email,
    password
  } = req.body;

  const regexName = /^[\w]{3,}$/i;
  const regexEmail = /[\w]+@[\w]+[.][\w]{2,3}/i;
  const regexPass = /^[0-9]{4,8}$/;

  let valid = true;

  if (!regexName.test(username)) valid = false;
  if (!regexEmail.test(email)) valid = false;
  if (!regexPass.test(password)) valid = false;

  if (!valid) 
    return res
      .status(400)
      .json({ message: 'Invalid Data' })
      .end();

  next();
}

router.post('/user/register', verifyUser, (req, res) => {
  const { 
    username, 
    email,
    password
  } = req.body;

  const users = readFileSync('db/atividade1.json', 'utf-8')
  const arrayOfUsers = JSON.parse(users);
  const newUser = { username, email, password };
  const newUsersArray = [...arrayOfUsers, newUser]

  writeFileSync('db/atividade1.json', JSON.stringify(newUsersArray));
  res
    .status(200)
    .json({ message: 'OK' })
})

router.post('/user/login', verifyUser,(_req, res) => {
  const token = generateToken();

  res
    .status(200)
    .json({ token });
});

module.exports = router;