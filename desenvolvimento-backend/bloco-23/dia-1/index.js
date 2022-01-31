const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();
const jsonParser = bodyParser.json();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(jsonParser);
app.use(cors({ origin: '*' }))
