const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const PORT = 3000;
const app = express();
const jsonParser = bodyParser.json();
const corsOptions = { origin: '*' };

app.use(jsonParser);
app.use(cors(corsOptions));


const simpsonJSON = fs.readFileSync('./simpson.json', 'utf-8');
const simpsonArray = JSON.parse(simpsonJSON);

app
  .route('/simpson')
  .get((_req, res) => {
    res
      .status(200)
      .json(simpsonArray)
  })
  .post((req, res) => {
    const { id, name } = req.body;
    const newSimp = { id, name };
    const idExist = simpsonArray
      .findIndex(({ id: simpId }) => +simpId === +id);

    if (idExist !== -1) return res.status(409).json({ message: 'Id already exists!' })
    simpsonArray.push(newSimp);

    fs.writeFileSync('./simpson.json', JSON.stringify(simpsonArray));
    res
      .status(204)
      .end();
  })

app
  .route('/simpson/:id')
  .get(({ params: { id } }, res) => {
    const selectedSimpson = simpsonArray
      .find(({ id: simpId }) => +simpId === +id)

    if (!selectedSimpson) return res.status(404).json({ message: 'Not Found' })
    res.status(200).json(selectedSimpson);
  })

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
