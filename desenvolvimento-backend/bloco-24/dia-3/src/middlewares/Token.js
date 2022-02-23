const JWT = require('jsonwebtoken');
const loginModel = require('../models/login');

const secret = process.env.SECRET;

const validate = async (req, res, next) => {
  try {

    const { authorization } = req.headers;

    if (!authorization) {
      throw { status: 404, message: 'token not found' }
    }

    const decoded = JWT.verify(authorization, secret);
    const data = decoded.data;

    const user = await loginModel.findOne(data);

    if (!user) {
      throw { status: 401, message: 'User or Password invalid' }
    }

    req.user = user;

    next();
  } catch (err) {
    next(err)
  }  
}

module.exports = validate;