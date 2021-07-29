$('document').ready( _ => {
  //Cancelando o funcionamento do metedo GET
  inicialState()
  function inicialState( ){
    function stopAction(e) {
      e.preventDefault()
    }
  
    let button = document.getElementById('bot')
    button.addEventListener('click', stopAction, false)
  }

  
  //Adicionando estados no select
  adicionarEstado()
  function adicionarEstado() {
    const estados = {
      'AC': 'Acre',
      'AL': 'Alagoas',
      'AP': 'Amapá',
      'AM': 'Amazonas',
      'BA': 'Bahia',
      'CE': 'Ceará',
      'DF': 'Distrito Federal',
      'ES': 'Espírito Santo',
      'GO': 'Goiás',
      'MA': 'Maranhão',
      'MT': 'Mato Grosso',
      'MS': 'Mato Grosso do Sul',
      'MG': 'Minas Gerais',
      'PA': 'Pará',
      'PB': 'Paraíba',
      'PR': 'Paraná',
      'PE': 'Pernambuco',
      'PI': 'Piauí',
      'RJ': 'Rio de Janeiro',
      'RN': 'Rio Grande do Norte',
      'RS': 'Rio Grande do Sul',
      'RO': 'Rondônia',
      'RR': 'Roraima',
      'SC': 'Santa Catarina',
      'SP': 'São Paulo',
      'SE': 'Sergipe',
      'TO': 'Tocantins'
    }
  
    for(let key in estados){
      $('#estado').append(`<option value="${key}">${estados[key]}`)
    }
  }

  //Adicionando validações do form
  let information = {
    name: '',
    email: '',
    cpf: '',
    cidade: '',
    endereco: '',
    estado: '',
    moradia: '',
    resumo: '',
    cargo: '',
    description: '',
    date: ''
  }
  
  function addInformation() {
    let name = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let cpf = document.getElementById('cpf').value
    let endereco = document.getElementById('adress').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let moradia = document.getElementById('tipo1').value
    let resumo = document.getElementById('textarea').value
    let cargo = document.getElementById('cargo').value
    let descricao = document.getElementById('descricao').value
    let date = document.getElementById('data').value

    information.name = name
    information.email = email
    information.cpf = cpf
    information.cidade = cidade
    information.endereco = endereco
    information.estado = estado
    information.moradia = moradia
    information.resumo = resumo
    information.cargo = cargo
    information.description = descricao
    information.date = date
  }
  
  let button = document.getElementById('bot')
  let clear = document.getElementById('clear')
  let cont = 0
  button.addEventListener('click', _=> {
    let fazerDiv = true
    addInformation()
    for( let key in information){
      if (information[key] == '') {
        alert(`Valor esperado no campo ${key}`)
        fazerDiv = false
      }
    }

    //adicionando validação da hora
    let verificandoFormatoData = information.date.match(/(^\d{2})[\W](\d{2})[\W](\d{4})/gm)
    if(verificandoFormatoData) {
      console.log('valor de data correto')
    }else{
      alert('Valor de Data incorreto')
    }

    //fazendo a div com as informações
    if(fazerDiv && verificandoFormatoData){
      cont++
      let div = document.createElement('div')
      for(let key in information){
        div.innerHTML += `${key}: ${information[key]}<br>`
      }
      cont == 1 ? $('main').append(div) : ''
    }
  })

  clear.addEventListener('click', _=> {
    for(let key in information){
      information[key] = ''
    }
    $('div').remove()
  })

})