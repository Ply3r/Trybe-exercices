const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = async (name) => {
  // Adicione o código aqui.
  const result = Animals.find((e) => e.name === name);
  if (result) return result
  return new Error('Nenhum animal com esse nome!')
};

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name)
    .then((arr) => arr)
    .catch((erro) => erro);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    it('Retorne o objeto do animal', async () => {
      const res = await findAnimalByName('Soneca')
      expect(res).toStrictEqual({ name: 'Soneca', age: 2, type: 'Dog' })
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    it('Retorna um erro', async () => {
      const res = await findAnimalByName('Dj azeitona')
      expect(res.message).toMatch('Nenhum animal com esse nome!')
    });
  });
});