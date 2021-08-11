const assert = require('assert')

const greetPeople = (people) => people.map(e => `Hello ${e}`)

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result)