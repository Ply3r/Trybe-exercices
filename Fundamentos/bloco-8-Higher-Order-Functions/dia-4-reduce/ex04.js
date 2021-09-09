const books = require('./data');
const assert = require('assert');


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = () => books.sort((a, b) => b.name.length > a.name.length ? 1 : -1)[0];
 
assert.deepStrictEqual(longestNamedBook(), expectedResult);