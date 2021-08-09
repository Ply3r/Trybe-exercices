(function($){
    let imagem = document.querySelector('#icone')
    let darkMode = {'background-color': '#0D262D', 'color': 'white'}
    let whiteMode = {'background-color': 'white', 'color': 'black'}
    $('#lista1').click(function(e){
        $(this).animate({left: `20`}, 500)
    })
    $('#lista1').mouseleave(function(e){
        $(this).animate({left: `-18%`}, 500)
    })
    $('#lista2').click(function(e){
    
        $(this).animate({right: `20`}, 500)
    })
    $('#lista2').mouseleave(function(e){
        $(this).animate({right: `-18%`}, 500)
    })
    let c = 0
    $('#bot').click(e => {
        c++
        if(c > 1){
            c = 0
        }
        if(c == 1){
            $("#bot").css(whiteMode)
            imagem.setAttribute('src', "imagens/sol.png")
            $('body').css(darkMode)
            $('box').css({'background-color': '#30475E', "color" : "white", "border": "2px solid white"})
            $('#eu').css({"border": "5px solid white"})
            $("#span").css('color', 'white')
            $('.lista').css({'background-color': '#30475E', "color":"white", "border": "2px solid white"})
        }
        if(c == 0){
            $("#bot").css(darkMode)
            $("#span").css('color', 'black')
            imagem.setAttribute('src', "imagens/lua.png")
            $('body').css(whiteMode)
            $('box').css(whiteMode).css("border", "2px solid black")
            $('#eu').css({"border": "5px solid black"})
            $('.lista').css(whiteMode).css("border", "2px solid black")
        }
    })
    $('#box2').hide()

    $('#box1').click(function(e) {
        $(this).hide(1000)
        $('#box2').show(1000)
    })
    $('#box2').click(function(e) {
        $(this).hide(1000)
        $('#box1').show(1000)
    })


})(jQuery)







