const searchEmployee = require('../searchEmployee');

describe('Função searchEmployee', () => {
  it('Recebe o id e a informação e retorna um obj com o id e a informação', () => {
    expect({id: '5569-4', lastName: 'Jobs'}).toEqual(searchEmployee('5569-4', 'lastName'))
    expect({id: '1256-4', specialities: ['Hooks', 'Context API', 'Tailwind CSS']}).toEqual(searchEmployee('1256-4', 'specialities'))
    expect({id: '8579-6', firstName: 'Ana'}).toEqual(searchEmployee('8579-6', 'firstName'))
  })
})