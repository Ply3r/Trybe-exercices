function generatePhoneNumber(arr) {
  let str = ''
  arr.forEach(e => str += e)
  let celular =  str.replace(/(\d{2})(\d{5})(\d{4})/gm, `($1) $2-$3`)
  let primeiraValidacao = arr.length == 11
  let segundaValidacao = true
  let terceiraValidacao = true
  arr.forEach(e => {
    e > 9 || e < 0 ? terceiraValidacao = false : ''
    let repetidos = 0
    for(let index of arr) index == e ? repetidos++ : ''
    repetidos >= 3 ? segundaValidacao = false : ''
  })

  if(primeiraValidacao && segundaValidacao && terceiraValidacao) {
    return celular
  }else if(primeiraValidacao == false){
    return 'Array com tamanho incorreto.'
  }else{
    return "não é possível gerar um número de telefone com esses valores"
  }
}


console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))