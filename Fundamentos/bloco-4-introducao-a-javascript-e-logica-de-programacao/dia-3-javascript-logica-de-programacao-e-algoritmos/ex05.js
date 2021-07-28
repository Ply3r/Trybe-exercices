function piramideVazia(n){
    for(let c = 0; c < Math.ceil(n/2); c++){
        if(c == Math.ceil(n/2) -1){
            console.log('*'.repeat(n))
        }else if(c == 0){
            console.log(' '.repeat(Math.ceil(n/2) - c - 1) + '*')
        }else{
            console.log(' '.repeat(Math.ceil(n/2) - c - 1) + '*' + ' '.repeat(c  + (c - 1)) + '*')
        }
    }
}

piramideVazia(7)