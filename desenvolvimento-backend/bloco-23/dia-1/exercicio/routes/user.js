const express = require('express');
const verifyInfo = require('../middlewares/verifyInfo.js');
const user = require('../model/user.js');

const route = express.Router();

route
  .route('/user')
  .post(verifyInfo, (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    user.insertOne(firstName, lastName, email, password);

    res
      .status(201)
      .json({ message: 'OK' })
  })
  .get(async (_req, res) => {
    const data = await user.getAll();

    res
      .status(200)
      .json({ users: data })
  })

route
  .route('/user/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const data = await user.getById(id);

    if (!data.length)
      return res.status(404).json({ message: 'Not Found!' });

    res
      .status(200)
      .json({ user: data });
  })
  .put(verifyInfo, async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    user.updateOne({ id, firstName, lastName, email, password });

    res
      .status(201)
      .json({ message: 'OK' });
  })

module.exports = route;
