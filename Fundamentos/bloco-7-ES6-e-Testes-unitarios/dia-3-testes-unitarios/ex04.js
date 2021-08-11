const assert = require('assert')

function myFizzBuzz(num) {
  if(typeof num !== 'number') return false
  if(num %3 === 0 && num %5 === 0){
    return 'fizzBuzz'
  }else if(num %3 !== 0 && num %5 !== 0) {
    return num
  }else if(num %3 === 0){
    return 'fizz'
  }else {
    return 'buzz'
  }
}

assert.strictEqual(myFizzBuzz(15), 'fizzBuzz')
assert.strictEqual(myFizzBuzz(21), 'fizz')
assert.strictEqual(myFizzBuzz(5), 'buzz')
assert.strictEqual(myFizzBuzz(7), 7 )
assert.strictEqual(myFizzBuzz('7'), false)