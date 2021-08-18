// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Abacate', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Morango', 'Chantili', 'Nozes'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));