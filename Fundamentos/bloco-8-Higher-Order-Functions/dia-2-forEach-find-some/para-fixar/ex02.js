const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find(e => e %3 === 0 && e %5 === 0 ? e : '')
}

console.log(findDivisibleBy3And5())