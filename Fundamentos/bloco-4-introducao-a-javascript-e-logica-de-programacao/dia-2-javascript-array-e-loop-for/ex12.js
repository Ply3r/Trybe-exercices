let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = numbers.map((e, i) => {
    if(numbers[numbers.length - 1] == e){
        return e * 2
    }else{
        return e * numbers[i + 1]
    }
   
})

console.log(novoArray)