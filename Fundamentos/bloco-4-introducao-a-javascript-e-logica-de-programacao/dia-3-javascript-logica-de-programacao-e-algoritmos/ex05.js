function tringuloVazio(n) {
  for(let c = 0; c < Math.ceil(n/2); c++) {
    if(c == 0){
      console.log(' '.repeat(n/2) + '*')
    } else if(c == Math.ceil(n/2) - 1){
      console.log('*'.repeat(n))
    } else {
      console.log(' '.repeat(n/2 - c) + '*' + ' '.repeat(c + (c - 1)) + '*')
    }   
  }
}
tringuloVazio(21)