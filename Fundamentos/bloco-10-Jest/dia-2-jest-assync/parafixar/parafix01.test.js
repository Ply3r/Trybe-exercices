const asyncSum = (a, b, cb) => cb(a, b);

describe('Teste de funções assincronas e callbacks no jest', () => {
  it('testa o comportamendo de uma simulação de função async', (done) => {
    setTimeout(() => {
      try {
        expect(5).toBe(5)
        console.log('deveria passar')
        done();
      } catch(error) {
        done(error)
      }
    }, 500)
  })
  it('testa se com uma callback funciona como esperado', (done) => {
    try {
      expect(asyncSum(2, 2, (a, b) => a + b)).toBe(4)
      done()
    } catch(error) {
      done(error)
    }
  })
})
