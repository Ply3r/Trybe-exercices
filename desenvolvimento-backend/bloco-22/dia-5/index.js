const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const atividade1 = require('./routes/atividade1');
const atividade2 = require('./routes/atividade2');
const atividade3 = require('./routes/atividade3');
const atividade4 = require('./routes/atividade4');

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.use(atividade1);
app.use(atividade2);
app.use(atividade3);
app.use(atividade4);
app.all('*', (_req, res) => {
  res
    .status(404)
    .json({ message: 'Opss... route not found 404' })
})


app.listen(PORT, () => console.log('server is running on ' + PORT))
