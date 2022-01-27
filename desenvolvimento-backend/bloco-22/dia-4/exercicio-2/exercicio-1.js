const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions))
app.use(bodyParser.json())

app
  .route('/ping')
  .get((_req, res) => {
    res.status(200).json({ message: 'pong' })
  });

app
  .route('/hello')
  .post((req, res) => {
    const { name } = req.body;
    res.status(200).json({ message: `Hello ${name}!` })
  });

app
  .route('/greetings')
  .post((req, res) => {
    const { name, age } = req.body;

    if (age <= 17) return res.status(401).json({ message: 'Not Autorized' })

    res.status(200).json({ message: `Hello ${name}!` })
  });

app
  .route('/user/:name/:age')
  .put((req, res) => {
    const { name, age } = req.params;

    res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
  })

app.listen(PORT, () => console.log('server running on port ' + PORT));

