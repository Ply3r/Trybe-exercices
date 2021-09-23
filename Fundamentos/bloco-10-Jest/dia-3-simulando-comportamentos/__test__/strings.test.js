const { expect, it } = require('@jest/globals')
const strings = require('../exercicios/strings')
jest.mock('../exercicios/strings')

describe('Tentando o arquivo strings.js', () => {

  afterEach(() => {
    strings.upperCase.mockReset
    strings.firstLetter.mockReset
    strings.concateneteStr.mockReset
  })

  it('teste da primeira função', () => {
    strings.upperCase.mockImplementation((str) => str.toLowerCase())
    strings.upperCase('LEANDRO')
    expect(strings.upperCase).toHaveBeenCalledTimes(1)
    expect(strings.upperCase('LEANDRO')).toBe('leandro')
  })

  it('teste da segunda função', () => {
    strings.firstLetter.mockImplementation((str) => str[str.length - 1])
    strings.firstLetter('leandro')
    expect(strings.firstLetter).toHaveBeenCalledTimes(1)
    expect(strings.firstLetter('leandro')).toBe('o')
  })

  it('teste da terceira função', () => {
    strings.concateneteStr.mockImplementation((str1, str2, str3) => str1 + str2 + str3)
    expect(strings.concateneteStr('l','e','o')).toBe('leo')
  })

})