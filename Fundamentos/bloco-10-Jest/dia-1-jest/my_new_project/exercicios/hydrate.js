function hydrate(str) {
  const numbers = str.match(/\d+/gm)
  const soma = numbers.reduce((a, b) => parseInt(a) + parseInt(b));
  return soma > 1 ? `${soma} copos de água` : `${soma} copo de água`
}

module.exports = hydrate;