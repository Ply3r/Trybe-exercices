const express = require('express');
const validate = require('../middlewares/validate');
const loginSchema = require('../schemas/loginSchema');
const loginService = require('../service/login');
const router = express.Router();


router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const { username, password } = req.headers;
  
      const token = await loginService.getToken({ username, password })

      return res.status(200).json({ token });
    } catch (err) {
      next(err)
    }
  })
  .post(
    validate(loginSchema),
    async (req, res, next) => {
      try {
        const { username, password } = req.body;
        const newUser = await loginService.createUser({ username, password });

        return res.status(201).json(newUser);
      } catch (err) {
        next(err)
      }
    }
)


module.exports = router
