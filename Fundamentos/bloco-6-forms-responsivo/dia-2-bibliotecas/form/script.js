//  prevent Default
const submit = document.getElementById('bot')
submit.addEventListener('click', e => e.preventDefault())

//  adicionar Estado
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
adicionarEstado()

//  Adicionando Date Pixker
function addDatePicker() {
  const data = document.getElementById('data')
  window.DatePickerX.setDefaults({
    format: 'dd/mm/yyyy',
    minDate: new Date(),
    maxDate: new Date()
  })
  data.DatePickerX.init()
}
addDatePicker()

//  Adicionando pop Up validation
function popUp() {
  submit.addEventListener('click', e=> {
    validation.init()
  })
}
popUp()