const {expect} = require('chai');
const {somar, subtrair, dividir} = require('../src/models/Calculadora');

describe('Função somar', () => {
    
    it('deve retornar 5 ao somar 2 + 3', ()=>{
        const resultado = somar(2,3)

        expect(resultado).to.equal(5); 
    })
});
describe('Função subtrair', () => {
    
    it('deve retornar -1 ao subtrair 2 - 3', ()=>{
        const resultado = subtrair(2,3)

        expect(resultado).to.equal(-1); 
    })
});
describe('Função dividir', () => {
    
    it('deve retornar 3 ao dividir 6 / 2', ()=>{
        const resultado = dividir(6,2)

        expect(resultado).to.equal(3); 
    })
});


