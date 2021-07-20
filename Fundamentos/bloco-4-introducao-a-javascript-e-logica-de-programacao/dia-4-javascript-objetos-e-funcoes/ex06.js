function verificaPalindrome(str){
    let result = ''
    let strArray = str.split('')
    strArray.reverse().forEach(e => {
        result += e
    });
    if(str == result){
        return true
    }else{
        return false
    }
}

console.log(verificaPalindrome('arara'))