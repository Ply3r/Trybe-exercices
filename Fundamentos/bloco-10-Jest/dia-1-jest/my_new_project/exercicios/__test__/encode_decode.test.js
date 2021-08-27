const {encode, decode} = require('../encode_decode')

describe('Função encode decode', () => {
  it('Função recebe uma string Leandro e retorna L21ndr4', () => {
    expect('L21ndr4').toBe(encode('Leandro'))
  })

  it('Função recebe Maravilhosooo e retorna M1r1v3lh4s444', () => {
    expect('M1r1v3lh4s444').toBe(encode('Maravilhosooo'))
  })

  it('Função recebe uma string L21ndr4 e retorna Leandro', () => {
    expect('Leandro').toBe(decode('L21ndr4'))
  })

  it('Função recebe uma string M1r1v3lh4s444 e retorna Maravilhosooo', () => {
    expect('Maravilhosooo').toBe(decode('M1r1v3lh4s444'))
  })
});