// importa a biblioteca
const readline = require('readline');

const calculo = require('./modulo/calculo');

// cria o objeto de entrada de dados
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    // coletando informando o peso
    entradaDados.question('Informe qual será a tabuada inicial (2 a 100): ', function(inicio){
        let tabInicial = inicio;
    
            // coletando informando a altura
            entradaDados.question('Informe qual será a tabuada final: ', function(fim){
                let tabFinal = fim;

                    entradaDados.question('Informe qual será o contador inicial (0 a 50): ', function(contInicial){
                        let contadorInic = contInicial;

                            entradaDados.question('Informe qual será o contador final: ', function(contfinal){
                                let contadorFim = contfinal;

                                let validar = calculo.validacao(tabInicial, tabFinal, contadorInic, contadorFim)
                                let resultado = calculo.calcularTabuada(tabInicial, tabFinal, contadorInic, contadorFim)
                    
            });
        });
    });
});