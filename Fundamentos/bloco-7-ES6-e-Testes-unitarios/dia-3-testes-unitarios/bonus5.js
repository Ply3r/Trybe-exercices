const assert = require('assert')


function Verify(str) {
  let validator = true
  str.length >= 8 ? '' : validator = false
  str.match(/[A-Z]/gm) ? '' : validator = false
  str.match(/[a-z]/gm) ? '' : validator = false
  str.match(/[0-9]/gm) ? '' : validator = false
  return validator
}



assert.strictEqual(Verify('Leandro8'), true)

