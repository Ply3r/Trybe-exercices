const { afterEach, it, expect } = require('@jest/globals')
const dadJokes = require('../exercicios/dadJokes')

describe('exercicio Bônus', () => {

  const piadas = jest.spyOn(dadJokes, 'fetchJoke')

  afterEach(piadas.mockReset)

  it('retorna o valor correto em sucesso', async () => {
    piadas.mockResolvedValue('Sucesso')
    await piadas()
      .then((res) => expect(res).toBe('Sucesso'))
  })

  it('retorna o valor correto para erro', async () => {
    piadas.mockRejectedValue('Erro')
    await piadas()
      .catch((error) => expect(error).toBe('Erro'))
  })

  it('simula uma resposta real da API', async () => {
    piadas.mockResolvedValue({
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    })
    await piadas()
      .then((res) => expect(res).toStrictEqual({
        'id': '7h3oGtrOfxc',
        'joke': 'Whiteboards ... are remarkable.',
        'status': 200
      }))
  })

})