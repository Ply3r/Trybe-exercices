const { uppercase } = require('../upperCase')

describe('Verify if a word called in uppercase function is upperCase', () => {
  it('word must be LEANDRO', (done) => {
    uppercase('leandro', (result) => {
      try {
        expect(result).toBe('LEANDRO');
        done();
      } catch (error) {
        done(error);
      }
    })
  })
})