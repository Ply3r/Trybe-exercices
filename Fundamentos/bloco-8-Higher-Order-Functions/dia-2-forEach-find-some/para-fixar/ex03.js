const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find(e => e.length === 5)
}

console.log(findNameWithFiveLetters());