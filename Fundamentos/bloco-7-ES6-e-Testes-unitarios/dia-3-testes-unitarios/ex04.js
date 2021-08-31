const assert = require('assert')

const myFizzBuzz = n => typeof n !== 'number' ? false : n % 3 === 0 && n % 5 === 0 ? 'fizzBuzz' : n % 3 === 0 ? 'fizz' : n % 5 === 0 ? 'buzz' : 'bug';

assert.strictEqual(myFizzBuzz(15), 'fizzBuzz')
assert.strictEqual(myFizzBuzz(21), 'fizz')
assert.strictEqual(myFizzBuzz(5), 'buzz')
assert.strictEqual(myFizzBuzz(7), 'bug' )
assert.strictEqual(myFizzBuzz('7'), false)