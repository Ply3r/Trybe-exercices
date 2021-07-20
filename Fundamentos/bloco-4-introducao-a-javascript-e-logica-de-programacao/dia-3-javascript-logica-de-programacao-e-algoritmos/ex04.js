function piramide(n){
    let array = []
    for(let c = 0; c < n; c++){
        array.push(' '.repeat(n - c - 1) + '*' + '*'.repeat(c * 2) + ' '.repeat(n - c - 1))
    }
    console.log(array)
        
}

piramide(3)