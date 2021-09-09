const books = require('./data');
const assert = require('assert')
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  const names = books.map((e) => e.author.name);
  return names.reduce((a, b) => a + `, ${b}`) + '.';
}

assert.strictEqual(reduceNames(), expectedResult);