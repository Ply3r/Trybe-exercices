horaDodia()
function horaDodia(){
    let horas = new Date().getHours()
    let time = new Date().getMinutes()
    let div = document.getElementById('horas')
    div.innerHTML = `${horas}:${time}`
    let body = document.querySelector('body')
    if(horas <= 11){
        body.style.background = `#e9c46a`
    }else if(horas > 11 && horas <= 17){
        body.style.background = `#f4a261`
    }else if(horas > 17 && horas <=19){
        body.style.background = `#2a9d8f`
    }else{
        body.style.background = `#264653`
    }
}