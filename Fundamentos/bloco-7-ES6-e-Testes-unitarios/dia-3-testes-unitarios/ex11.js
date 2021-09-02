const assert = require("assert");

const removeVowels = (word) => {
  word = word.split('')
  let cont = 0
  return word.map(e => e.match(/[aeiou]/gm) ? cont += 1 : e).join('')
};


const parameter = 'Dayane';
const result = 'D1y2n3';


assert.strictEqual(removeVowels(parameter), result)