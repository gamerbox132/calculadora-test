const { expect } = require('chai');
const {dividir} = require('../src/services/CalculadoraService')
const sinon = require('sinon');
const calculadora = require('../src/models/Calculadora')
describe('Calculadora Service', () => {
    afterEach(() =>{
       it('deve dividir corretamente', () => {
        const stub = sinon.stub(calculadora, 'dividir');
        stub.returns(5);
        const resultado = dividir(10,2);
        expect(resultado).to.equal(5);
        sinon.assert.calledOnce(stub);
        sinon.assert.calledWithExactly(stub,10, 2)

    });
    it('deve lançar erro ao dividir por zero',()=> {
        expect(() => {
            dividir(10,0);
                }).to.throw('Divisor não pode ser zero');
    }); 
    });
    

});