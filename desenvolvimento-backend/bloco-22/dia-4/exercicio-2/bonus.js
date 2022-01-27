const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const generateToken = require('./generateToken');

const app = express();
const jsonParser = bodyParser.json();
const corsOptions = { origin: '*' };

const users = [];
const authToken = {
  Authorization: ''
}

app.use(jsonParser);
app.use(cors(corsOptions));

app
  .route('/signup')
  .post((req, res) => {
    const { email, password, first_name, phone } = req.body;

    console.log(email, password, first_name, phone)

    if ([email, password, first_name, phone].includes(undefined)) 
      return res.status(401).json({ message: 'Missing Fields' });

    const token = generateToken()
    
    authToken.Authorization = token;
    users.push({ 
      email,
      password,
      first_name,
      phone,
    })

    res
      .status(200)
      .json({ token })
  })

app.get('/signin', (req, res) => {
  const { authorization } = req.headers;
  if (authorization !== authToken.Authorization) 
    return res.status(401).json({ message: 'invalid token!' })

  res.status(200).json({ message: 'OK' })
})

app.listen(3000, () => console.log('server is running on 3000'));
