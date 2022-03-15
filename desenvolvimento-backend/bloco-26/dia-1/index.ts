import readLine from 'readline-sync';
import convert from './exercicios';

const resolveCallback = (
  callback: Function, 
  options: { 
    value: number, 
    base: string, 
    cBase: string 
  }
) => {
  const { value, base, cBase } = options;
  return callback(value, base, cBase);
}

const functions = [convert.area, convert.capacity, convert.mass, convert.volume]

const type = readLine.questionInt('1 - area | 2 - capacity | 3 - mass | 4 - volume: ')
const value = readLine.questionInt('Digite o valor para a converção: ')
const base = readLine.question('Digite a base do valor: ')
const cBase = readLine.question('Digite a base de converção para valor: ')

console.log(
  resolveCallback(functions[type - 1], { value, base, cBase })
);