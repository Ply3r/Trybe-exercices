function pecaDeXadrez(peca){
    const valor = peca.toLowerCase()
    switch(valor){
        case 'cavalo':
            console.log('Cavalo: se movimenta em forma de L, 2 casas para frente e 1 para o lado')
            break
        case 'bispo':
            console.log('Bispo: se movimenta em diagonal quantas casas quiser')
            break
        case 'rei':
            console.log('Rei: se movimenta 1 casa em qualquer direção')
            break
        case 'rainha':
            console.log('Rainha: se movimenta em diagonal, na horizontal e vertical quantas casas quiser')
            break
        case 'peão':
            console.log('Peão: se movimenta 2 casas para frente no começo da partida e depois so uma casa para frente e pode comer a peça na diagonal')
            break
        default:
            console.log('erro, valor invalito')
    }
}


pecaDeXadrez('Rainha')