// importa a biblioteca
const readline = require('readline');
const calculo = require('./modulo/calculo');

// cria o objeto de entrada de dados
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    entradaDados.question('Escolha um número inicial de 0 até 500: ', function(inicial){
        let numeroInic = inicial

        entradaDados.question('Esolha um número final de 100 até 1000: ', function(final){
            let numeroFin = final

            let separar = calculo

        });
    });