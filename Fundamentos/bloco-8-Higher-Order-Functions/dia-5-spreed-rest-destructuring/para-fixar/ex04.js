let C = 'gato';
let A = 'água';
let B = 'arroz';

console.log(C, A, B); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const coisas = [C, A, B]
let [animal, bebida, comida] = coisas

console.log(animal, bebida, comida)