const getApi = async (index) => (
  fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    .then((res) => res.json())
    .then(({order, name, types, weight, sprites}) => {
      const { front_default } = sprites;
      const tipos = types
      .map(({ type }) => type.name)
      .reduce((acumulador, atual) => acumulador += atual + ' ', '')
      .trim();
      return { order, name, tipos, weight, front_default }
    })
);

export default getApi;
