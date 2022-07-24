/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota "/"', () => {
  describe('Consulta a lista de repositórios', () => {
    let response;

    before(async () => {
      response = await chai
        .request(server)
        .get('/');
    });


    it('Essa requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('Ao acessar corretamente retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('O objeto deve conter cinco repositórios', () => {
      const size = Object.keys(response.body).length;

      expect(size).to.be.equal(5);
    });

    it('O conteúdo deve conter propriedades e valores corretamente', () => {
      const title = "Takenet.Radar";
      const subtitle = "Radar de tecnologias takenet";
      const image = "https://avatars.githubusercontent.com/u/4369522?v=4";

      expect(response.body[3].title).to.be.equal(title);
      expect(response.body[3].subtitle).to.be.equal(subtitle);
      expect(response.body[3].image).to.be.equal(image);
    });
  });
});