const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const numbers = names.map((e) => e.match(/[aA]/gm).length)
  return numbers.reduce((a, b) => a + b);
}

assert.deepStrictEqual(containsA(), 20);