function calcularDescontoSalario(salario){
    let aliquota;
    let aliquotaMax;
    let IR;
    let parcelaIR;

    if(salario <= 1556.94){
        aliquota = .08
    }else if(salario > 1556.94 && salario < 2594.92){
        aliquota = .09
    }else if(salario > 2594.92 && salario < 5189.82){
        aliquota = .11
    }else{
        aliquotaMax = 570.88
    }
    
    let valorDescontadoInss = salario - (aliquota * salario)
    if(salario > 5189.82){
        valorDescontadoInss = salario - aliquotaMax
    }
    
    if(valorDescontadoInss > 1903.98 && valorDescontadoInss <= 2826.65){
        IR = .075
        parcelaIR = 142.80
    }else if(valorDescontadoInss > 2826.65 && valorDescontadoInss <= 3751.05){
        IR = .15
        parcelaIR = 354.80
    }else if(valorDescontadoInss > 3751.05 && valorDescontadoInss <= 4664.68){
        IR = .225
        parcelaIR = 636.13
    }else if(valorDescontadoInss > 4664.68){
        IR = .275
        parcelaIR = 869.36
    }


    const valorDescontadoIR = (valorDescontadoInss * IR) - parcelaIR
    return valorDescontadoInss - valorDescontadoIR
}


console.log(calcularDescontoSalario(6000))