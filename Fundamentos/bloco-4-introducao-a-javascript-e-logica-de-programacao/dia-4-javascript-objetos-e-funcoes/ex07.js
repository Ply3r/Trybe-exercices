function indexMaior(arr){
    let maior = arr.map(e => e).sort((a,b) => a - b)
    maior = maior[maior.length - 1]
    console.log(arr.indexOf(maior))
}


indexMaior([2, 3, 6, 7, 10, 1])

