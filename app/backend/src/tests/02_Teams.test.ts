import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Team';
import * as fakeData from './fakeData/Teams';

chai.use(chaiHttp);
const { expect } = chai;

describe('02_Teams', () => {
  afterEach(sinon.restore);

  describe('GET /teams', () => {
    // describe('Testa casos de falha:', () => {});
    
    describe('Testa casos de sucesso:', () => {

      beforeEach(async () => {
        sinon.stub(Teams, 'findAll').resolves(fakeData.getAll.mock as Teams[]);
      });

      it('01 - quando acessa a rota /teams', async () => {
        const { status, body } = await chai.request(app)
          .get(fakeData.getAll.path)
          .send();

        expect(status).to.be.equal(200);
        expect(body).to.be.an('array');
        expect(body).to.deep.equal(fakeData.getAll.response);
      })
    });
  });

  describe('GET /teams/:id', () => {
    // describe('Testa casos de falha:', () => {});

    describe('Testa casos de sucesso:', () => {

      beforeEach(async () => {
        sinon.stub(Teams, 'findOne').resolves(fakeData.getOne.mock as Teams);
      });

      it('01 - quando acessa a rota /teams/7', async () => {
        const { status, body } = await chai.request(app)
          .get(fakeData.getOne.path)
          .send();

        expect(status).to.be.equal(200);
        expect(body).to.be.an('object');
        expect(body).to.deep.equal(fakeData.getOne.response);
      })
    });
  });
});