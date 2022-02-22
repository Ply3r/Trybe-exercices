const express = require('express');
const employee = require('./src/controllers/employee.js');
const address = require('./src/controllers/address.js')
const error = require('./src/middlewares/error.js')

const PORT = 5000;
const app = express();

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

app.use(express.json())
app.use('/employee', employee);
app.use('/address', address);

app.use(error);
