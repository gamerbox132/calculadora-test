const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');
const sinon = require('sinon')
const calculadoraService = require("../src/services/CalculadoraService")

describe('calculadora Controller', () =>{
    const stub = sinon.stub(calculadoraService, 'dividir');
            stub.returns(9);
    it('deve retornar 200', async () => {
        const response = await request(app)
            .post('/calculadora/dividir')
            .send({
                a: 90,
                b: 20
            });
        expect(response.status).to.equal(200);
        expect(response.body.resultado).to.equal(9);
    });
});
