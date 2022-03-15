const app = require('./api.js');

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});