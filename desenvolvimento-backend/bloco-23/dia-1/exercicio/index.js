const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./routes/user.js');

const app = express();
app.listen(5000, () => console.log('server running on 5000'));

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(user);
