let informacoes = {
  email: '',
  senha: ''
}

initialState()
function initialState() {
  let botao = document.querySelector('#bot')
  botao.addEventListener('click', _ => {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    informacoes.email = email
    informacoes.senha = senha
    console.log(informacoes)
  })
}