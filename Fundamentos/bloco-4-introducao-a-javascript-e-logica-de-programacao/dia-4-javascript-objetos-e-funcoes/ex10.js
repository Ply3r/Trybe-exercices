function quantasVezesApareceMais(arr){
    let contRepetidos = 0
    let contNumero = 0
    let indexNumeroRepetido = 0

    for(let index in arr){
        contRepetidos = 0
        for(let index2 in arr){
            if(arr[index] == arr[index2]){
                contRepetidos++
            }
        }

        if(contRepetidos > contNumero){
            contNumero = contRepetidos
            indexNumeroRepetido = index
        }

    }
    console.log( arr[indexNumeroRepetido]  )

}


quantasVezesApareceMais([2, 3, 2, 5, 8, 2, 3])