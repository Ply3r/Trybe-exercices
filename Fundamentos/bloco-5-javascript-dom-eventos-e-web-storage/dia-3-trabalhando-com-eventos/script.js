function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
criarDiaCalendario()
function criarDiaCalendario(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  let ul = document.getElementById('days')
  for(let c = 0; c < dezDaysList.length; c++){

    if(dezDaysList[c] == 24 || dezDaysList[c] == 31 ){

      let li = document.createElement('li')
      li.className = "day holiday"
      li.innerHTML = dezDaysList[c]
      ul.appendChild(li)

    }else if(dezDaysList[c] == 4 || dezDaysList[c] == 11 || dezDaysList[c] == 18){
      let li = document.createElement('li')
      li.className = "day friday"
      li.innerHTML = dezDaysList[c]
      ul.appendChild(li)
    }else if(dezDaysList[c] == 25){
      let li = document.createElement('li')
      li.className = "day holiday friday"
      li.innerHTML = dezDaysList[c]
      ul.appendChild(li)
    }else{
      let li = document.createElement('li')
      li.className = "day"
      li.innerHTML = dezDaysList[c]
      ul.appendChild(li)
    }

  }
}
mudaCorDias()
function mudaCorDias(){
  let contador = 0
  let classe = document.getElementsByClassName('holiday')
  let button = document.getElementById('btn-holiday')
  button.addEventListener('click', () => {
    contador++
    if(contador > 1){
      contador = 0
    }
    if(contador == 1){
      for(let keys in classe){
        classe[keys].style.background = 'red'
      }
    }else{
      for(let keys in classe){
        classe[keys].style.background = 'rgb(238,238,238)'
      }
    }
  })

}

addSexta()
function addSexta(){
  let contador = 0
  let button = document.getElementById('btn-friday')
  let classes = document.getElementsByClassName('friday')
  let sextDays = [4,11,18,25]
  button.addEventListener('click', () => {
    contador++
    if(contador > 1){
      contador = 0
    }

    if(contador == 1){
      for(let k in classes){
        classes[k].innerText = "😎"
      }
    }else{
      for(let k in classes){
        classes[k].innerText = sextDays[k]
      }
    }
  })
}

addTarefa()
function addTarefa() {

  let button = document.getElementById('btn-add')
  let texto = document.getElementById('task-input')
  let pai = document.querySelector('.my-tasks')
  let contador = 0
  button.addEventListener('click', _ => {
    let span = document.createElement('span')
    span.innerHTML = texto.value
    pai.appendChild(span)
    addLegenda(geradorHEX(), pai) 
    selecionarTask(contador)
    contador++
    corSelecionada()
  })
}

const addLegenda = (cor, pai) => {
  let div = document.createElement('div')
  let br = document.createElement('br')
  div.className = "task"
  div.style.background = cor
  pai.appendChild(div)
  pai.appendChild(br)
}

function geradorHEX() {
  return "#" + parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')
}


function selecionarTask(c){
  let classes = document.getElementsByClassName('task')
  classes[c].addEventListener('click', _=>{
    if(classes[c].className == 'task'){
      classes[c].className = 'task selected'
    }else if(classes[c].className == 'task selected'){
      classes[c].className = 'task'
    }

  })
}

function corSelecionada() {
  let selected = document.querySelector('.selected')
  let corSelecionada = selected.style.background
  let days = document.getElementsByClassName('day')
  for(let c = 0; c < days.length; c++){
    days[c].addEventListener('click',  _ => {
      if(days[c].style.color != corSelecionada){
        days[c].style.color = corSelecionada
      }else{
        days[c].style.color = "rgb(119,119,119)"
      }
    })
  }
}











function aumentar(e){
  e.target.style.fontSize = "50px"
}
function diminuir(e){
  e.target.style.fontSize = "22px"
}

zoom()
function zoom(){
  let days = document.getElementsByClassName('day')
  for(let index = 0; index < days.length; index++){
    days[index].addEventListener('mouseover', aumentar, false) 
    days[index].addEventListener('mouseout', diminuir, false) 
    
  }
}
