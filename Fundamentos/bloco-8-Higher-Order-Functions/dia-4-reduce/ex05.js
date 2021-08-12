const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  let cont = 0
  names.forEach(e => cont += e.match(/[aA]/gm).length)
  return cont
}

assert.deepStrictEqual(containsA(), 20);