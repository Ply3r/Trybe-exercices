const simpson = require('./simpson.json');

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

showSimpsonById()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
