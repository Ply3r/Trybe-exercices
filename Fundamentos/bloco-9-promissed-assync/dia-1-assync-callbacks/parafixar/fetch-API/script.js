const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;

const usoDoJSON = JSON.parse(jsonInfo)


function addEmpresas() {
  const empresas = document.getElementById('corporations-used-by')
  const getEmpresas = usoDoJSON.muitasEmpresasUsam
  getEmpresas.forEach(e => {
    const li = document.createElement('li')
    li.innerHTML = e
    empresas.appendChild(li)
  })
}
addEmpresas()

function addVantagens() {
  const vantagens = document.getElementById('advantages')
  const getVantagens = usoDoJSON.temVariasVantagens
  getVantagens.forEach(e => {
    const li = document.createElement('li')
    li.innerHTML = e
    vantagens.appendChild(li)
  })
}
addVantagens()

function addLinguagens() {
  const linguagens = document.getElementById('languages-used-by')
  const getLiguagens = usoDoJSON.muitasLinguagensDaoSuporte
  getLiguagens.forEach(e => {
    const li = document.createElement('li')
    li.innerHTML = e
    linguagens.appendChild(li)
  })
}
addLinguagens()
