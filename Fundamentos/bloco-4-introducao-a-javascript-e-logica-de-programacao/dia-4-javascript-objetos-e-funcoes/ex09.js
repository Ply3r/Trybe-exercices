function maiorNome(arr){
    let result = ''
    for(let key in arr){
        for(let key2 in arr){
            if(arr[key2].length > arr[key].length){
                result = arr[key2]
            }
        }
    }
    console.log(result)
}


maiorNome(['José','Fernanda', 'Lucas', 'Nádia', 'Cairo', 'Joana'])