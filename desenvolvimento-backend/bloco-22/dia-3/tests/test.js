const { expect } = require('chai');
const fs = require('fs');
const { stub } = require('sinon');
const { verifyNumber, escreverArquivo } = require('../index.js');

describe('Testando função verifyNumber', () => {
  it('quando passado um numero maior que zero a resposta será "positivo"', () => {
    const answer = verifyNumber(1);
    expect(answer).to.be.equal('positivo');
  });
  it('quando passado um numero menor que zero a resposta será "negativo"', () => {
    const answer = verifyNumber(-1);
    expect(answer).to.be.equal('negativo');
  });
  it('quando passado um numero igual a zero a resposta será "neutro"', () => {
    const answer = verifyNumber(0);
    expect(answer).to.be.equal('neutro');
  });
  it('quando passado uma string a resposta será "o valor deve ser um número"', () => {
    const answer = verifyNumber('0');
    expect(answer).to.be.equal('o valor deve ser um número');
  });
})

describe('Testando funcao de escrever em arquivo', () => {
  const MENSAGEM = "Leandrexx";

  before(() => {
    stub(fs, 'readFileSync').returns(MENSAGEM);
  })

  after(() => {
    fs.readFileSync.restore();
  })

  it('Deve retornar OK quando o arquivo existir', () => {
    const answer = escreverArquivo('../arquivo.txt', MENSAGEM);

    expect(answer).to.be.equal('OK');
  });
  it('Deve retornar "ERROR" quando o arquivo não existir', () => {
    const answer = escreverArquivo('', MENSAGEM);
    
    expect(answer).to.be.equal('ERROR')
  });
})

