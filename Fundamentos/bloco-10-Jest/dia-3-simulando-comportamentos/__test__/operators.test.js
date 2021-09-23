const { expect, it, afterEach } = require('@jest/globals')
const operators = require('../exercicios/operators')
jest.mock('../exercicios/operators')


describe('testa as funções do arquivo operators', () => {

  const subtrair = jest.spyOn(operators, 'subtrair')
  subtrair.mockImplementation((a, b) => a - b)


  afterEach(() => subtrair.mockRestore())
  
  it('teste de mock de subtração', () => {
    subtrair(10, 5)
    expect.assertions(2)
    expect(subtrair).toHaveBeenCalled()
    expect(subtrair(10, 5)).toBe(5)
  })

  it('teste de mock de multiplicação', () => {
    operators.multiplicar.mockReturnValueOnce(10)
    expect.assertions(1)
    expect(operators.multiplicar(2, 5)).toBe(10)
  })

  it('teste de mock de soma', () => {
    operators.somar.mockImplementation((a, b) => a + b)
    expect.assertions(1)
    expect(operators.somar(5, 5)).toBe(10)
  })

  it('teste de mock de divisao', () => {
    operators.dividir.mockReturnValue(15)
    operators.dividir(2, 5)
    expect(operators.dividir).toHaveBeenCalled()
    expect(operators.dividir).toHaveBeenCalledWith(2, 5)
    expect(operators.dividir(30, 2)).toBe(15)
  })

  it('teste de mock de subtração novamente', () => {
    subtrair.mockReturnValue(20)
    subtrair(10, 5)
    expect(subtrair).toHaveBeenCalledTimes(1);
    expect(subtrair).toHaveBeenCalledWith(10, 5)
    expect(subtrair(10, 30)).toBe(20)
  })
})