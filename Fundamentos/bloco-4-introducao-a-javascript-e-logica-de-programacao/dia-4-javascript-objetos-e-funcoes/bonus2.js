let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(arr){
    let novoArr = []
    for(let c = 0; c < arr.length; c++){
        for(let i = 0; i < arr[c].length; i++){
            novoArr.push(arr[c][i])
        }
    }
    return novoArr.filter(e => e%2==0)
    
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]))