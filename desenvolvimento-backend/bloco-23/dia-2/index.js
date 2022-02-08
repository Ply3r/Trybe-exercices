const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Pong = require('./controllers/pong.js');
const cep = require('./controllers/cep.js')
const { verifyBody } = require('./services/cep.js');

const PORT = 3000;
const jsonParser = bodyParser.json();
const app = express();

app.listen(PORT, () => console.log(`server running on ${PORT}`))

app.use(jsonParser);
app.use(cors({ origin: '*' }));

app.get('/ping', Pong);
app.get('/cep/:cep', cep.getOne);
app.post('/cep', verifyBody, cep.insertOne);
