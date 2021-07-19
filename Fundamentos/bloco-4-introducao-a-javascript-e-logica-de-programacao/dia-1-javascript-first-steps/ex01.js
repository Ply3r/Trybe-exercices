function calculator(param1, param2, operator){
    let result = eval(`${param1} ${operator} ${param2}`)
    return result
}
console.log(calculator(4, 4, '*'))
