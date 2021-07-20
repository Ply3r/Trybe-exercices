function maiorNome(arr){
    let result = ''
    for(let c = 0; c < arr.length; c++){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length > arr[c].length){
                result = arr[i]
            }
        }
    }
    console.log(result)
}


maiorNome(['José','Fernanda', 'Lucas', 'Nádia', 'Cairo', 'Joana'])