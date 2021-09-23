const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, rejects) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length) {
        return resolve(arrayAnimals);
      }

      return rejects(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);


describe('Testando o comportamento de promisses no jest', () => {
  it('Testa se o retorndo da função com o tipo Dog é o correto', () => {
    expect.assertions(1)
    return findAnimalsByType('Dog')
      .then((res) => (
        expect(res).toStrictEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }, { name: 'Soneca', age: 2, type: 'Dog' }])
      ))
  })
  it('testa se não existe o tipo girafa no objeto animal', () => {
    expect.assertions(1)
    return findAnimalsByType('girafa')
      .catch((error) => (
        expect(error.message).toMatch('Não possui esse tipo de animal.')
      ))
  })
})
