function fizzBuzz(arr) {
  return arr.map(e => e %3 == 0 && e %5 == 0 ? e = 'fizzBuzz' : (
    e %3 != 0 && e %5 != 0 ? e = 'bug!' : (
      e %3 == 0 ? e = 'fizz' : e = 'buzz'
    )
  ))
}


console.log(fizzBuzz([9, 25]))