let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayImpar = numbers.filter(e => e %2 != 0)
if(arrayImpar == ''){
    console.log("nenhum valor ímpar encontrado")
}else{
    console.log(arrayImpar)
}