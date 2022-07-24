/* eslint-disable no-undef */
const chai = require('chai');

const { expect } = chai;

const { filterRepository, connect } = require('../../src/service');

describe('Testando camada de service', () => {
  describe('Teste para função "connect"', () => {
    let response;

    before(async () => {
      response = await connect()
    });

    it('Retorno da função "connect" deve ser um array', () => {
      expect(response).to.be.a('array');
    });
  });

  describe('Teste para função "filterRepository"', () => {
    let response;

    before(async () => {
      const data = await connect()
      response = filterRepository(data);
    });

    it('Retorno da função "filterRepository" deve ser um array', () => {
      expect(response).to.be.a('array');
    });

    it('Retorno da função "filterRepository" deve conter cinco objetos', () => {
      expect(response.length).to.be.equal(5);
    });

    it('Verifica se a chave e valor estão corretos', () => {
      const title = "library.logging";

      expect(response[1].title).to.be.equal(title);
    });
  });
});

