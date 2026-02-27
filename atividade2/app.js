/*****************
 * objetivo: Desenvolver um sistema para coletar as informações do usuario
 * 
 * autor: Hugo
 * versão: 1.0
 ******************/

// importa a biblioteca
const readline = require('readline');
const calculo = require('./modulo/calculoMedia.js');
const validacaoStrin = require('./modulo/validacoes.js');

// cria o objeto de entrada de dados
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// coletando informação
entradaDados.question('Informe o nome do professor: ', function (nomeP) {
    let nomeProfessor = nomeP;

    entradaDados.question('Informe o sexo do professor (masculino/feminino): ', function (sexoP) {
        let sexoProfessor = sexoP;

        entradaDados.question('Nome do aluno: ', function (nomeA) {
            let nomeAluno = nomeA;

            entradaDados.question('Sexo do aluno (masculino/feminino): ', function (sexoA) {
                let sexoAluno = sexoA;

                entradaDados.question('Nome do curso: ', function (curso) {
                    let nomeCurso = curso;

                    entradaDados.question('Nome da disciplina: ', function (disciplina) {
                        let nomeDisciplina = disciplina;

                        console.log('--------------------------------------------------------------');

                        // entrada das notas
                        entradaDados.question('Digite a primeira nota: ', function (nota1) {
                            let primeiraNota = nota1;

                            entradaDados.question('Digite a segunda nota: ', function (nota2) {
                                let segundaNota = nota2;

                                entradaDados.question('Digite a terceira nota: ', function (nota3) {
                                    let terceiraNota = nota3;

                                    entradaDados.question('Digite a quarta nota: ', function (nota4) {
                                        let quartaNota = nota4;

                                        let validacaoString = validacaoStrin.validarString(
                                            nomeP,
                                            sexoP,
                                            nomeA,
                                            sexoA,
                                            curso,
                                            disciplina
                                        );

                                        let resultado = calculo.calculoMedia(
                                            primeiraNota,
                                            segundaNota,
                                            terceiraNota,
                                            quartaNota,
                                            sexoP,
                                            sexoA,
                                            nomeP,
                                            nomeA,
                                            curso,
                                            disciplina
                                        );

                                        entradaDados.question(
                                            'Informe qual foi a nota do aluno no exame: ',
                                            function (exame) {
                                                let notaExame = exame;

                                                let resultado2 = calculo.calculoExame(notaExame);
                                            }
                                        );
                                    });
                                });
                            });
                        });

                    });
                });
            });
        });
    });
});