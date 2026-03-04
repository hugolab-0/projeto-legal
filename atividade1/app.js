/*****************
 * objetivo: Desenvolver um sistema para coletar as informações do usuario
 * 
 * autor: Hugo
 * versão: 1.0
 ******************/

// importa a biblioteca
const readline = require('readline');

const calculo = require('./modulo/calculoImc');

// cria o objeto de entrada de dados
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    // coletando informando o peso
    entradaDados.question('Informe o seu  peso (em kg): ', function(peso){
        let pesoCliente = peso;
    
    // coletando informando a altura
    entradaDados.question('Informe sua altura (em metros): ', function(altura){
        let alturaCliente = altura;

        let resultado = calculo.validacoes(pesoCliente, alturaCliente)
    });
});
   