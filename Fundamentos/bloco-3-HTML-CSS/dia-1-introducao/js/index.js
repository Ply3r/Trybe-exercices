setInterval(function horaDodia(){
    let horas = new Date().getHours()
    let time = new Date().getMinutes()
    let div = document.getElementById('horas')
    div.innerHTML = `${horas}:${time}`
    let dia = document.querySelector('.dia')
    if(horas <= 11){
        dia.style.background = `#e9c46a`
    }else if(horas > 11 && horas <= 17){
        dia.style.background = `#f4a261`
    }else if(horas > 17 && horas <=19){
        dia.style.background = `#4fa79c`
    }else{
        dia.style.background = `#264653`
    }
}, 1000)