
function generateRGB() {
  let arr = []
  for(let c = 0; c < 3; c += 1) {
    arr.push(Math.round(Math.random() * 255))
  }
  return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
}

generateGame()
function generateGame() {
  let result = generateRGB()
  $('#color-container').css('background-color', result)
  let bots = document.getElementsByClassName('bot')
  let escolhido = Math.floor(Math.random() * 4)
  for(let c = 0; c < bots.length; c += 1){
    if(c === escolhido) {
      bots[c].innerHTML = result
    }else{
      bots[c].innerHTML = generateRGB()
    }
  }

  for(let c = 0; c < bots.length; c += 1){
    bots[c].addEventListener('click', e => {
      if(bots[c].innerHTML === $('#color-container').css('background-color') ){
        $(`#bot${c + 1}`).css('border', `5px solid #2fc18b`)
        $('#result').html('Parabens! você acertou!!!').css('color', "#2fc18b")
      }else{
        $(`#bot${c + 1}`).css('border', `5px solid red`)
      }
    })
  }
}

reset()
function reset() {
  $('#reset').on('click', e => {
    $('#result').html('')
    $('.bot').css('border', 'black')
    generateGame()
  })
}

