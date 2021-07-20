let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for(let c = 0; c < Object.values(info).length; c++){
    if(c != Object.values(info).length - 1){
        console.log(`${Object.values(info)[c]} e ${Object.values(info2)[c]}`)
    }else{
        console.log('Ambos recorrentes')
    }
}