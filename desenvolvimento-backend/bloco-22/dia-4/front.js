const getDrinks = async () => {
  const container = document.getElementById('drink-container')
  const drinks = await fetch('http://localhost:3000/drinks')
    .then((res) => res.json());
  console.log(drinks)
  drinks.forEach(({name, id, price}) => {
    const father = document.createElement('div')
    father.id = id

    const title = document.createElement('h1')
    title.innerText = name

    const p = document.createElement('p');
    p.innerText = `R$ ${price.toFixed(2)}`

    father.appendChild(title)
    father.appendChild(p)
    container.appendChild(father)
  })
}

window.onload = () => {
  getDrinks();
}