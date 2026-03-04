// Importa o módulo nativo 'readline' do Node.js
// Usado para capturar dados digitados no terminal
const readline = require('readline');

// Importa seu módulo personalizado que contém as funções
// validacao() e calcularFatorial()
const calculo = require('./modulo/calculo.js');

// Cria a interface de entrada e saída de dados no terminal
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Exibe a pergunta no terminal e espera o usuário digitar algo
entradaDados.question('Informe qual será o número do fatoreal: ', function(numero){

    // Armazena o valor digitado (sempre vem como string)
    let numeroFato = numero;
    
    // Chama a função de validação
    // (Atualmente ela só exibe mensagem de erro, mas não impede a execução)
    let validar = calculo.validacao(numeroFato)

    // Chama a função que calcula o fatorial
    // Mesmo se a validação der erro, essa função ainda será executada
    let resultado = calculo.calcularFatorial(numeroFato)

});