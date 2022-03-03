const express = require('express');
const router = express.Router();
const validate = require('../middlewares/Token');
const userModel = require('../models/users');

router.use(validate);

router
  .route('/')
  .get(async (_req, res, next) => {
    try {
      const users = await userModel.findAll();

      return res.status(200).json({ users })
    } catch (err) {
      next(err)
    }
  })


module.exports = router;
