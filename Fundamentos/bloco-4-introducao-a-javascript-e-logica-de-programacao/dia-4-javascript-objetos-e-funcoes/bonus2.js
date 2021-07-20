let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(arr){
    let novoArr = []
    for(let key in arr){
        for(let key2 in arr[key]){
            novoArr.push(arr[key][key2])
        }
    }
    return novoArr.filter(e => e%2==0)
    
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]))