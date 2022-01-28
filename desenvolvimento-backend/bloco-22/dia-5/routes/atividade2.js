const express = require('express');
const axios = require('axios');

const route = express.Router();

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  const regexToken = /[\w]{12}/gmi

  if (!regexToken.test(authorization))
    return res
      .status(401)
      .json({ message: "Invalid token" })

  next();
}

route.get('/btc/price', verifyToken, async (_req, res) => {
  const apiResponse = await axios
    .get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');

  res.status(200).json({ apiResponse: apiResponse.data });
})


module.exports = route;
