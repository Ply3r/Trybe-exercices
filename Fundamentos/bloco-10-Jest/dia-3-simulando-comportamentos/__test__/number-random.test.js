const { expect, it } = require('@jest/globals')
const func = require('../exercicios/number-random')



describe('Testa o comportamendo de numeros aleatorios', () => {

  const numberRandom = jest.spyOn(func, 'numberRandom')

  beforeEach(numberRandom.mockReset) 

  it('deveria ser chamada', () => {
    numberRandom.mockImplementation((a, b) => a + b)
    numberRandom(2, 2) 
    expect.assertions(2)
    expect(numberRandom).toHaveBeenCalled();
    expect(numberRandom).toHaveBeenCalledWith(2, 2)
  })

  it('deveria retornar 10', () => {
    numberRandom.mockReturnValue(10);
    expect.assertions(1)
    expect(numberRandom()).toBe(10);
  })

  it('testando o mockImplementation', () => {
    numberRandom.mockImplementation((a, b) => a + b)
    expect.assertions(1);
    expect(numberRandom(2, 2)).toBe(4)
  })

  it('testando o mockImplementation', () => {
    numberRandom.mockImplementation((a, b) => a / b)
    numberRandom(10, 5)
    expect(numberRandom).toHaveBeenCalled();
    expect(numberRandom).toHaveBeenCalledWith(10, 5);
    expect(numberRandom(50, 5)).toBe(10);
  })

  it('testando o mock Implementation parte 2', () => {
    numberRandom.mockImplementation((a, b, c) => a * b * c)
    numberRandom(2, 2 ,2)
    expect(numberRandom).toHaveBeenCalledTimes(1)
    expect(numberRandom(2, 2, 2)).toBe(8)
  })

})