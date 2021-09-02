const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = arr => {
  const meio = Math.floor(arr.length / 2)
  const result = [arr[meio]]
  arr.splice(meio, 1)
  return result
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const output = removeMiddle(words);
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);