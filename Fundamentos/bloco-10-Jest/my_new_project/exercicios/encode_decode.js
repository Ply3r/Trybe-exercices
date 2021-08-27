function encode(str) {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  const arr = str.split('')
  .map((e) => vowels[e] === undefined ? e : vowels[e])
  .join('');
  return arr;
}

function decode(str) {
  const vowels = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'};
  const arr = str.split('')
  .map((e) => vowels[e] === undefined ? e : vowels[e])
  .join('');
  return arr;
}

module.exports = { encode, decode }