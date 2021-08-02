const algarismosRomanosParaNumber = str => {
    str = str.toUpperCase()
    let array = str.split('')
    let number = 0
    let valores = {
        1 : /^[I]$/gm,
        5 : /^[V]$/gm,
        10 : /^[X]$/gm,
        50 : /^[L]$/gm,
        100 : /^[C]$/gm,
        500 : /^[D]$/gm,
        1000 : /^[M]$/gm,
    }
    array.forEach((e,i) => {
        for(let keys in valores){
            if(e.match(valores[keys])){
                if(array[i - 1] == 'I' && array[i] == 'V'){
                    number = Number(keys) - number

                }else if(array[i - 1] == 'I' && array[i] == 'X'){

                    number = Number(keys) - number
                    
                }else if(array[i - 1] == 'X' && array[i] == 'L'){

                    number = Number(keys) - number
                    
                }else if(array[i - 1] == 'X' && array[i] == 'C'){

                    number = Number(keys) - number
                    
                }else if(array[i - 1] == 'C' && array[i] == 'D'){

                    number = Number(keys) - number
                    
                }else if(array[i - 1] == 'C' && array[i] == 'M'){

                    number = Number(keys) - number
                    
                }else{
                    number += Number(keys)
                }
            }
        }
    })
    console.log(number)
}


algarismosRomanosParaNumber('mmdclxv')