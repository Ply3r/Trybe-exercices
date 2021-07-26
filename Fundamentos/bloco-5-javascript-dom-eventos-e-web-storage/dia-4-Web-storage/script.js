initialState()
function initialState(){
    let body = document.querySelector('body')
    let bot = document.getElementById('theme')
    if(localStorage.darkMode == undefined || localStorage.fontSize == undefined || localStorage.fontFamily == undefined || localStorage.espacamento == undefined){
        localStorage.setItem('darkMode', 0)
        localStorage.setItem('fontSize', '1.1rem')
        localStorage.setItem('fontFamily', 'serif')
        localStorage.setItem('espacamento', '22px')
    }else{
        $('body').css('font-size', localStorage.getItem('fontSize'))
        $('body').css('font-family', localStorage.getItem('fontFamily'))
        $('body').css('line-height', localStorage.getItem('espacamento'))
        if(localStorage.darkMode == 1){
            body.className = 'body-dark'
            bot.innerText = 'Dark Theme'
        }else{
            body.className = 'body-white'
            bot.innerText = 'White Theme'
        }
    }
}



theme()
function theme(){
    let body = document.querySelector('body')
    let bot = document.getElementById('theme')
    let cont = localStorage.darkMode
    bot.addEventListener('click', _=>{
        cont++
        cont > 1 ? cont = 0 : cont
        localStorage.darkMode = cont
        if(cont == 1){
            body.className = 'body-dark'
            bot.innerText = 'Dark Theme'
        }else{
            body.className = 'body-white'
            bot.innerText = 'White Theme'
        }

    })
}

fontSize()
function fontSize() {
    let fonts = ['1.1rem', '1.2rem', '1.3rem']
    let cont = 0
    $('#font').on('click', function(){
        cont > fonts.length -1 ? cont=0 : cont
        localStorage.fontSize = fonts[cont]
        $('body').css('font-size', fonts[cont])
        cont++
    })
}

fontFamily()
function fontFamily(){
    let familys = ['serif' ,'Poppins', 'Roboto']
    let cont = 0
    $('#font-family').on('click', _=>{
        cont++
        cont > familys.length - 1 ? cont = 0 : cont 
        localStorage.fontFamily = familys[cont]
        $('body').css('font-family', familys[cont])
    })
}

espacamento()
function espacamento(){
    let linhas = ['22px', '23px', '24px', '25px']
    let cont = 0
    $('#espacamento').on('click', _=>{
        cont++
        cont > linhas.length - 1 ? cont = 0 : cont
        localStorage.espacamento = linhas[cont]
        $('body').css('line-height', linhas[cont])
    })
}