const assert = require('assert')


const myRemove = (arr, item) => arr.filter(e => e !== item)

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'tem que ser iguais')
//assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4] ,'não pode ser iguais')
//assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 5), [1,2,3,4], 'não houve mudança')
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])