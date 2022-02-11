const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const products = require('./controllers/productController.js')

const PORT = 3000;
const app = express();


app.listen(PORT, () => console.log(`server running on ${PORT}`));

app.use(cors({ origin: '*' }))
app.use(bodyParser.json());

app.use(products);

