const convercaoNota = valor => {
    if(valor >= 90){
        console.log(`${valor}: A`)
    }else if(valor < 90 && valor >= 80){
        console.log(`${valor}: B`)
    }else if(valor < 80 && valor >= 70){
        console.log(`${valor}: C`)
    }else if(valor < 70 && valor >= 60){
        console.log(`${valor}: D`)
    }else if(valor < 60 && valor >= 50){
        console.log(`${valor}: E`)
    }else if(valor < 50){
        console.log(`${valor}: F`)
    }
}


convercaoNota(89)