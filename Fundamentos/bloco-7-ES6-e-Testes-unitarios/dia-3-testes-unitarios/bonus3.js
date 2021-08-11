const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = arr => {
  let output = [arr[Math.floor(arr.length / 2)]]
  arr.splice(Math.floor(arr.length / 2), 1)
  return output
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const output = removeMiddle(words);
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);