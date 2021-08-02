//Gerador da Conjectura de Collaz
function conjecturaDeCollatz(n) {
  let soma = n
  let array = [soma]
  while(soma != 1){
    soma %2 == 0 ? soma = soma / 2 : soma = 3 * soma + 1
    array.push(soma)
  }
  return array
}

//função que cria um array de 0 ate o Numero informado
function getNumeros(n) {
  let array = []
  for(let c = 1; c <= n; c++){
    let numeros = {}
    numeros.name = c
    numeros.data = conjecturaDeCollatz(c)
    array.push(numeros) 
  }
  return array
}

//função que cria um array de um numero
function getNumero(n) {
  let array = []
  let numeros = {}
  numeros.name = n
  numeros.data = conjecturaDeCollatz(n)
  array.push(numeros)
  console.log(array)
  return array
}


//declarando o initialState
inicialState()
function inicialState( ){
  function stopAction(e) {
    e.preventDefault()
  }

  let button = document.getElementsByClassName('bot')
  for(let bot of button){
    bot.addEventListener('click', stopAction, false)
  }
}


$('#bot-especifico').on('click', _ => {
  $('#container').html('')
  let valor = document.getElementById('especifico').value
  valor < 1 || valor == undefined ? (alert('valor invalido'), valor = 1) : ''
  Highcharts.chart('container', {
      title: {
          text: 'Collaz Conjecture'
      },
      xAxis: {
          title: {
            text: 'repetition'
          }
      },
      yAxis: {
          title: {
              text: 'Numbers'
          }
      },
      series: getNumero(valor)
  });
})


$('#bot-varios').on('click', _ => {
  $('#container').html('')
  let valor = document.getElementById('varios').value
  valor < 1 || valor == undefined ? (alert('valor invalido'), valor = 1) : ''
  Highcharts.chart('container', {
      title: {
          text: 'Collaz Conjecture'
      },
      xAxis: {
          title: {
            text: 'repetition'
          }
      },
      yAxis: {
          title: {
              text: 'Numbers'
          }
      },
      series: getNumeros(valor)
  });
})







document.addEventListener('DOMContentLoaded', function () {
  Highcharts.chart('container', {
      title: {
          text: 'Collaz Conjecture'
      },
      xAxis: {
          title: {
            text: 'repetition'
          }
      },
      yAxis: {
          title: {
              text: 'Numbers'
          }
      },
      series: getNumeros(10)
  });
});