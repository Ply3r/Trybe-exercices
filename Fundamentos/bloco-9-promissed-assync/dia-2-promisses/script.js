// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.getElementById('jokeContainer')

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeContainer.innerHTML = data.joke);
};

window.onload = () => fetchJoke();

const teste = new Promise((resolve, reject) => {
  const arr = [];
  for(let c = 0; c < 10; c += 1) {
    const random = Math.floor(Math.random() * 51);
    arr.push(random ** 2)
  }
  const result = arr.reduce((a, b) => a + b);
  if (result < 8000) {
    resolve(result)
  } else {
    reject(result)
  }
})
.then((e) => {
  const result = [2, 3, 5, 10]
  const res = result.map(item => e/item)
  console.log('Promise resolvida ' + e)
  console.log(res)
  return res
})
.then(arr => {
  const soma = arr.reduce((a, b) => a + b)
  console.log(soma)
  return soma
})
.catch((e) => console.log(`Promise rejeitada ${e}`))
.then((e) => console.log('É mais de oito mil!'));
