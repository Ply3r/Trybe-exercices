



addEvent()
function addEvent() {
  let contador = 0
  let button = document.getElementById('bot')
  let h1 = document.getElementById('h1')
  button.addEventListener('click', () => {
    contador += 1
    h1.innerHTML = contador
  })
}