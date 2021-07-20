function indexMenor(arr){
    let menor = arr.map(e => e).sort((a,b) => a - b)
    menor = menor[0]
    console.log(arr.indexOf(menor))
}

indexMenor([2, 4, 6, 7, 10, 0, -3])