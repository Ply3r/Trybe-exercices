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
        for(let c = 0; c < Object.values(valores).length; c++){
            if(e.match(Object.values(valores)[c])){
                if(array[i - 1] == 'I' && array[i] == 'V'){
                    number = Number(Object.keys(valores)[c]) - number

                }else if(array[i - 1] == 'I' && array[i] == 'X'){

                    number = Number(Object.keys(valores)[c]) - number
                    
                }else if(array[i - 1] == 'X' && array[i] == 'L'){

                    number = Number(Object.keys(valores)[c]) - number
                    
                }else if(array[i - 1] == 'X' && array[i] == 'C'){

                    number = Number(Object.keys(valores)[c]) - number
                    
                }else if(array[i - 1] == 'C' && array[i] == 'D'){

                    number = Number(Object.keys(valores)[c]) - number
                    
                }else if(array[i - 1] == 'C' && array[i] == 'M'){

                    number = Number(Object.keys(valores)[c]) - number
                    
                }else{
                    number += Number(Object.keys(valores)[c])
                }
            }
        }
    })
    console.log(number)
}


algarismosRomanosParaNumber('mmdclxv')