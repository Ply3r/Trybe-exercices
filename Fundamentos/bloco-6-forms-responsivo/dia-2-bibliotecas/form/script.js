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

//adicionando informações
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

//Adicionando validações do form
let button = document.getElementById('bot') 
button.addEventListener('click', _=> {
  let cont = 0
  
  addInformation()
  for( let key in information){
    if (information[key] == '') {
      alert(`Valor esperado no campo ${key}`)
    }
  }
  
  //adicionando validação da hora
  let verificandoFormatoData = information.date.match(/(^\d{2})[\W](\d{2})[\W](\d{4})/gm)
  let numeros = verificandoFormatoData[0].match(/\d+/gm)
  let horaPositiva = true
  for(let valor in numeros){
    Number(numeros[valor]) < 0 ? horaPositiva = false : ''
    Number(numeros[0]) > 31 ? horaPositiva = false : ''
    Number(numeros[1]) > 12 ? horaPositiva = false : ''
  }
  
  verificandoFormatoData && horaPositiva ? '' : alert('Valor de Data incorreto')
  
  //fazendo a div com as informações
  $('div').remove()
  if(verificandoFormatoData){
    cont++
    let div = document.createElement('div')
    for(let key in information){
      information[key] != '' ? div.innerHTML += `${key}: ${information[key]}<br>` : div.innerHTML += `${key}: Valor não informado <br>`
    }
    cont == 1 ? $('main').append(div) : ''
  }
})

//adicionando botão clear
botClear()
function botClear() {
  let clear = document.getElementById('clear')
  clear.addEventListener('click', _=> {
    for(let key in information){
      information[key] = ''
    }
    $('div').remove()
  })
}

//Adicionando biblioteca DatePickerX
window.DatePickerX.setDefaults({
  format: 'dd/mm/yyyy',
  maxDate: new Date()
})
gerarData()
function gerarData(){
  let data = document.getElementById('data')
  data.DatePickerX.init()
  
}

//Adicionando biblioteca Pop up Validation
