function maiorTreis(a, b, c){
    let result = [a,b,c].sort((a,b) => b - a)
    return result[0]
}

console.log(maiorTreis(3, 6, 9))