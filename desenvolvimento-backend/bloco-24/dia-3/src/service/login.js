const loginModel = require('../models/login');
const JWT = require('jsonwebtoken');
const ValidationError = require('./ValidationError.js');

const secret = process.env.SECRET;
const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256'
}

const createUser = async (data) => {
  const { username, password } = data;
  const [user] = await loginModel.findOne({ username, password });

  if (user) {
    throw new ValidationError({ status: 401, message: 'User already exists!' })
  }

  const newUser = await loginModel.inserUser({ username, password });

  return { id: newUser.id, username, password }
}

const getToken = async (data) => {
  const { username, password } = data;

  const [user] = await loginModel.findOne({ username, password });

  if (!user) {
    throw new ValidationError({ status: 404, message: 'User not found!' });
  }

  const token = JWT.sign({ data: user}, secret, jwtConfig);
  return token;
}

module.exports = { createUser, getToken }