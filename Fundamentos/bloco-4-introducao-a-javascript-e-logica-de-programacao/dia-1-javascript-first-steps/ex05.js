function anguloTriangulo(a, b, c){
    const soma = a + b + c
    return soma == 180 ? true : false
}

console.log(anguloTriangulo(60,60,61))