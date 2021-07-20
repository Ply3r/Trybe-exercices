function verificarFinal(str, strFinal){
    if(  str.slice(str.length - strFinal.length) == strFinal  ){
        return true
    }else{
        return false
    }
}


console.log(verificarFinal('joaofernando', 'fernan'))