import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/User';
import * as fakeData from './fakeData/Users';

chai.use(chaiHttp);
const { expect } = chai;

describe('01_Users', () => {
  afterEach(sinon.restore);
  // let chaiHttpResponse: Response;

  describe('POST /login', () => {
    describe('Testa os casos de falha:', () => {

      beforeEach(async () => {
        sinon.stub(Users, 'findOne').resolves(null);
      });

      it('01 - quando o email tem o formato errado', async () => {
        const { status, body } = await chai.request(app)
          .post('/login')
          .send({ ...fakeData.post.request, email: 'wrongemail.com' });

        expect(status).to.be.equal(400);
        expect(body).to.be.an('object');
        expect(body).to.be.deep.equal({
          message: 'Email must be valid'
        });
      })

      it('02 - quando o email não existe', async () => {
        const { status, body } = await chai.request(app)
          .post('/login')
          .send({ ...fakeData.post.request, email: 'donotexistkdf73278shk@donotexist.com' });

        expect(status).to.be.equal(401);
        expect(body).to.be.an('object');
        expect(body).to.be.deep.equal({
          message: 'Incorrect email or password'
        });
      })

      it('03 - quando o um campo não existe (email)', async () => {
        const { status, body } = await chai.request(app)
          .post('/login')
          .send({ password: fakeData.post.request.password });

        expect(status).to.be.equal(400);
        expect(body).to.be.an('object');
        expect(body).to.be.deep.equal({
          message: 'All fields must be filled'
        });
      })

      it('04 - quando o password tem o formato errado', async () => {
        const { status, body } = await chai.request(app)
          .post('/login')
          .send({ ...fakeData.post.request, password: '12345' });

        expect(status).to.be.equal(400);
        expect(body).to.be.an('object');
        expect(body).to.be.deep.equal({
          message: 'The password must be at least 6 characters long'
        });
      })
    });

    describe('Testa os casos de sucesso:', () => {

      beforeEach(() => {
        sinon.stub(Users, 'findOne').resolves(fakeData.post.mock as Users);
      })

      it('01 - quando "email" e "password" estão corretos na requisição', async () => {
        const { status, body } = await chai.request(app)
          .post('/login')
          .send(fakeData.post.request);

        expect(status).to.be.equal(200);
        expect(body).to.be.an('object');
        expect(body.token).to.be.an('string');
      })
    });
  });

  describe('GET /login/validate', () => {
    describe('Testa casos de falha:', () => {

      beforeEach(async () => {
        sinon.stub(Users, 'findOne').resolves(fakeData.getOne.mock as Users);
      });

      it('01 - quando o token não e passado', async () => {
        const { status, body } = await chai.request(app)
          .get('/login/validate')
          .send();

        expect(status).to.be.equal(401);
        expect(body).to.be.an('object');
        expect(body.message).to.be.equal('The token is required');
      })

      it('02 - quando o token está errado', async () => {
        const { status, body } = await chai.request(app)
          .get('/login/validate')
          .set('authorization', 'wrongtoken&6j6*j');

        expect(status).to.be.equal(500);
        expect(body).to.be.an('object');
        expect(body).to.deep.equal({ message: 'jwt malformed' });
      })
    });

    describe('Testa casos de sucesso:', () => {

      beforeEach(async () => {
        sinon.stub(Users, 'findOne').resolves(fakeData.getOne.mock as Users);
      });

      it('01 - quando o token está correto', async () => {
        const { status, body } = await chai.request(app)
          .get('/login/validate')
          .set('authorization', fakeData.getOne.request.authorization);

        expect(status).to.be.equal(200);
        expect(body).to.be.an('object');
        expect(body).to.deep.equal({ role: fakeData.getOne.mock.role });
      })
    });
  });
});
