function somatoria(n){
    let array = []
    for(let c = 1; c <= n; c++){
        array.push(c)
    }
    return array.reduce((a,b) => a + b)
}


console.log(somatoria(5))