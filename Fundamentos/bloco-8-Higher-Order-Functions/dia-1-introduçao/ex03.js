const numberBet = () => Math.floor(Math.random() * 5)

const sorteio = (func) => Math.floor(Math.random() * 5) === func() ? 'Parabéns você ganhou' : 'Tente novamente'

console.log(sorteio(numberBet))