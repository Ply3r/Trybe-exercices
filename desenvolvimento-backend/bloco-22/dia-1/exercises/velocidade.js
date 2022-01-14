const readfile = require('readline-sync');

const distance = readfile.questionInt('Distancia(km): ');
const time = readfile.questionInt('Horas: ');
const velocity = distance / time;

console.log(`sua velocidade é de ${velocity}km/h`);