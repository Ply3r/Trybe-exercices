const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const jsonParser = bodyParser.json();
const corsOptions = {
  origin: '*'
};

app.use(jsonParser);
app.use(cors(corsOptions));

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.listen(3000, () => 'Server is running')

app
  .route('/search')
  .get((req, res) => {
    const { 
      q: query, 
      maxPrice=Infinity,
      minPrice=-Infinity
    } = req.query;
    const regex = new RegExp(query, 'i')
    const filtredDrinks = drinks
      .filter(({ name }) => regex.test(name))
      .filter(({ price }) => price <= +maxPrice)
      .filter(({ price }) => price >= +minPrice);

    if (filtredDrinks) {
      res
        .status(200)
        .json(filtredDrinks)
    } else {
      res
        .status(404)
        .json({ message: 'Error! not found' })
    }
  });

app
  .route('/drink/:id')
  .get((req, res) => {
    const { id } = req.params;
    const selectedDrink = drinks.find(({ id: drinkId }) => drinkId === +id);

    if (selectedDrink) {
      res
        .status(200)
        .json(selectedDrink);
    } else {
      res
        .status(404)
        .json({ message: 'Error! not found' })
    }
  })
  .delete((req, res) => {
    const { id } = req.params;
    const drinkId = drinks.findIndex((drink) => +drink.id === +id);

    if (drinkId === -1) return res.status(404).json({ message: 'Not Found' });
   
    drinks.splice(drinkId, 1);
    res
      .status(204)
      .json({ message: 'OK' });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const drinkId = drinks.findIndex((drink) => +drink.id === +id);

    if (drinkId === -1) return res.status(404).json({ message: 'Not Found' });
   
    drinks[drinkId] = { ...drinks[drinkId], name, price };
    res
      .status(204)
      .json({ message: 'OK' });
  })

app
  .route('/drinks')
  .get((_req, res) => {
    res
      .status(200)
      .json(drinks)
  })
  .post(({ body }, res) => {
    if (body) {
      drinks.push(body);
      res
        .status(201)
        .json({ message: 'OK' })
    }
  })