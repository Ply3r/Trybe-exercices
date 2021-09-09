const books = require('./data');
const assert = require('assert');

const expectedResult = 43;

function averageAge() {
  const idades = books.map((e) => e.releaseYear - e.author.birthYear);
  return idades.reduce((a, b) => a + b) / idades.length
}

assert.strictEqual(averageAge(), expectedResult);