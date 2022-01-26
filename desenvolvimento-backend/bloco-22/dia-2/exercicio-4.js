const simpson = require('./simpson.json');
const { readFileSync } = require('fs');
const { writeFile } = require('fs').promises;

const showSimpsons = () => {
  simpson.forEach(({ id, name }) => console.log(`${id} - ${name}`));
};

const showSimpsonById = (id) => {
  const hold = simpson.find(({id: simpId}) => +id === +simpId);
  return new Promise((resolve, reject) => {
    if (!id) return reject("id não informado")
    return resolve(hold)
  });
}

const removeItens = (...ids) => {
  const newFile = simpson.filter(({ id }) => !ids.includes(+id))
  writeFile('./simpson.json', JSON.stringify(newFile))
}

const simpsonFamily = () => {
  const family = simpson.slice(0, 4);
  writeFile('./simpsonFamily.json', JSON.stringify(family));
};

const addInSimpsonFamily = (...ids) => {
  const people = simpson.filter(({ id }) => ids.includes(+id));
  const family = readFileSync('./simpsonFamily.json', 'utf-8')
  const arrayFamily = JSON.parse(family)
  const newFamily = [...people, ...arrayFamily];
  writeFile('./simpsonFamily.json', JSON.stringify(newFamily))
}

const removeFamily = (...ids) => {

};
