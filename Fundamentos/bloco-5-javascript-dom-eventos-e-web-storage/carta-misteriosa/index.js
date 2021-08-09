start()
function start() {
  $('#bot').on('click', (_) => {
    $('#words-container').html('')
    let input = document.getElementById('texto').value
    input = input.trim()
    let arr = input.split(' ')
    makeWords(arr)
  })
}


function makeWords(arr) {
  arr.forEach(e => {
    let div = document.createElement('div')
    div.innerHTML = e
    div.style.color = generateColor()
    div.style.backgroundColor = generateColor()
    div.style.width = generateWidthAndHeight() + 'px'
    div.style.height = generateWidthAndHeight() + 'px'
    div.style.fontSize = `1.${generateSize()}rem`
    $('#words-container').append(div)
  })
}


function generateWidthAndHeight() {
  return Math.floor(Math.random() * (180 - 120) + 120)
}

function generateSize() {
  return Math.floor(Math.random() * 9)
}

function generateColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}