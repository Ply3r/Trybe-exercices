const express = require('express');
const bodyParser = require('body-parser');
const patient = require('../src/controllers/Patient');
const plan = require('../src/controllers/Plan');
const error = require('../src/middlewares/error');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patient', patient)
app.use('/plan', plan)

// app.use(error)

module.exports = app