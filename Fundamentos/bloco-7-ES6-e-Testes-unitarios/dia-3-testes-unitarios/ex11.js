const assert = require("assert");

const removeVowels = (word) => {
  const result = word.split('');
  let cont = 0;
  return result.map((e) => e.match(/[aeiou]/gm) ? cont += 1 : e).join('')
};


const parameter = 'Dayane';
const result = 'D1y2n3';


assert.strictEqual(removeVowels(parameter), result)