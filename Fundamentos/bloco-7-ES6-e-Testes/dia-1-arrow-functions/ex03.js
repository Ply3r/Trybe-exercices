const factorial = (num) => { 
  for(let c = num - 1; c > 0; c -= 1) num *= c
  return num > 0 ? num : 1
}


console.log(factorial(4))