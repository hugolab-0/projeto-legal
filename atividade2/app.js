/*****************
 * objetivo: Desenvolver um sistema para coletar as informações do usuario
 * autor: Hugo
 * versão: 1.0
 ******************/

// importa a biblioteca
const readline = require('readline');
const calculo = require('./modulo/calculoMedia.js');
const validacao = require('./modulo/validacoes.js');

// cria o objeto de entrada de dados
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// coletando informação
entradaDados.question('Informe o nome do professor: ', function (nomeProfessor) {

    entradaDados.question('Informe o sexo do professor (masculino/feminino): ', function (sexoProfessor) {

        entradaDados.question('Informe o nome do aluno: ', function (nomeAluno) {

            entradaDados.question('Informe o sexo do aluno (masculino/feminino): ', function (sexoAluno) {

                entradaDados.question('Informe o nome do curso: ', function (curso) {

                    entradaDados.question('Informe o nome da disciplina: ', function (disciplina) {

                        // validação de texto
                        validacao.validarString(
                            nomeProfessor,
                            nomeAluno,
                            sexoProfessor,
                            sexoAluno,
                            curso,
                            disciplina
                        );

                        console.log('--------------------------------------------------------------');

                        entradaDados.question('Digite a primeira nota: ', function (nota1) {

                            entradaDados.question('Digite a segunda nota: ', function (nota2) {

                                entradaDados.question('Digite a terceira nota: ', function (nota3) {

                                    entradaDados.question('Digite a quarta nota: ', function (nota4) {

                                        calculo.calculoNota(
                                            nota1,
                                            nota2,
                                            nota3,
                                            nota4,
                                            sexoProfessor,
                                            sexoAluno,
                                            nomeProfessor,
                                            nomeAluno,
                                            curso,
                                            disciplina
                                        );

                                        entradaDados.close();

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