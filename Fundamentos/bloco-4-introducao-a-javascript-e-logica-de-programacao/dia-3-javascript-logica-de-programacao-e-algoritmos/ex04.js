function piramide(n) {
  for(let c = 1; c <= n; c++){
    console.log(' '.repeat(n - c) + '*'.repeat(c + (c - 1)))
  }
}

piramide(6)