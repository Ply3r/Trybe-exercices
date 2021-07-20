function tringuloInvertido(n){
    for(let c = 0; c <= n; c++){
        console.log(' '.repeat(n - c) + '*'.repeat(c))
    }
}

tringuloInvertido(5)