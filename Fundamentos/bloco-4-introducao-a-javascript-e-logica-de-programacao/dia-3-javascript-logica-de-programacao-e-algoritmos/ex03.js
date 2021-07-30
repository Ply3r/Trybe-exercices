function trianguloInvertido(n) {
  for(let c = 1; c <= n; c++){
    console.log(' '.repeat(n - c) + '*'.repeat(c))
  }
}

trianguloInvertido(6)