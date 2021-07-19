function loja(venda, custo, quantidade){
    const lucro = venda - (custo + (custo * 0.2) )
    return `O valor total do lucro é ${lucro * quantidade}`
}


console.log(loja(20,10,1000))