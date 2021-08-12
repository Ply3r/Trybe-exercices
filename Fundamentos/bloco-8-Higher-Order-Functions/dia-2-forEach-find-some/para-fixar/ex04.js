const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  let result = []
  musicas.forEach(index => {
    let arr = Object.values(index)
    arr.find(e => e === id ? result.push(index) : '')
  })
  return result
}

console.log(findMusic('31031685'))