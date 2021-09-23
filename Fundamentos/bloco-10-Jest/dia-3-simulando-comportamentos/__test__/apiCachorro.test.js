const { describe, it, expect } = require('@jest/globals')
const fetchApi = require('../exercicios/apiCachorro')

describe('testa o funcionamento de uma requisição de uma API com o mock', () => {
  const api = jest.spyOn(fetchApi, 'fetchApi')

  afterEach(api.mockReset)

  it('testa o retorno resolve da chamada de API', async () => {
    api.mockResolvedValue('requisição concluida com sucesso')
    await api()
      .then((res) => expect(res).toBe('requisição concluida com sucesso'))
  })

  it('testa se o retorno reject da chamada da API é o correto', async () => {
    api.mockRejectedValue('Infelizmente não conseguimos fazer a conexão')
    await api()
      .catch((error) => expect(error).toBe('Infelizmente não conseguimos fazer a conexão'))
  })
})