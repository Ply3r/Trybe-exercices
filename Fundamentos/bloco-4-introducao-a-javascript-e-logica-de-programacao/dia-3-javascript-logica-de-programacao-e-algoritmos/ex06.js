function primo(n){
    let primo = true
    for(let c = 2; c < n; c++){
        n %c == 0 ? primo = false : ''
    }
    console.log(`É primo? : ${primo}`)
}

primo(10)
