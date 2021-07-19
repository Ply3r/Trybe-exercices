function maiorTreis(a, b, c){
    if(a > b && a > c){
        return `Maior: ${a}`
    }else if(b > a && b > c){
        return `Maior: ${b}`
    }else{
        return `Maior: ${c}`
    }
}

console.log(maiorTreis(3, 6, 9))