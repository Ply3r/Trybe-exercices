function verificadorDeNumeroPrimo(n) {
  let verificador = true
  for(let c = 2; c < n; c++){
    n %c == 0 ? verificador = false : ''
  }
  return `É primo?: ${verificador}`
}

console.log(verificadorDeNumeroPrimo(7))