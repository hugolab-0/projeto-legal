const validar = require('./validacoes.js');

function calculoNota(nota1, nota2, nota3, nota4, sexoProfessor, sexoAluno, nomeProfessor, nomeAluno, curso, disciplina) {
    
    let n1 = Number(nota1);
    let n2 = Number(nota2);
    let n3 = Number(nota3);
    let n4 = Number(nota4);

    let validacao = validar.validacoes(n1, n2, n3, n4);

    let somaNotas = n1 + n2 + n3 + n4;
    let mediaFinal = somaNotas / 4;

    let statusFinal;

    if (mediaFinal >= 70) {
        statusFinal = 'Aprovado';
    } 
    else if (mediaFinal < 50) {
        statusFinal = 'Reprovado';
    } 
    else {
        statusFinal = calculoExame(mediaFinal);
    }

    resultado(
        n1, 
        n2, 
        n3, 
        n4, 
        sexoProfessor, 
        sexoAluno, 
        nomeProfessor, 
        nomeAluno, 
        curso, 
        disciplina, 
        mediaFinal, 
        statusFinal
    );
}

function calculoExame(media) {

    if (media >= 60) {
        return 'Aprovado';
    } else {
        return 'Reprovado';
    }
}

function resultado(
    nota1, 
    nota2, 
    nota3, 
    nota4, 
    sexoProfessor, 
    sexoAluno, 
    nomeProfessor, 
    nomeAluno, 
    curso, 
    disciplina, 
    mediaFinal, 
    statusFinal
) {

    let n1 = Number(nota1);
    let n2 = Number(nota2);
    let n3 = Number(nota3);
    let n4 = Number(nota4);

    let media = mediaFinal;
    let status = statusFinal;

    let sexoP = sexoProfessor;
    let sexoA = sexoAluno;

    let nomeP = nomeProfessor;
    let nomeA = nomeAluno;
    let nomeCurso = curso;
    let nomeDisciplina = disciplina;

    let letraProfessor;
    let letraAluno;
    let letra;


    console.log('--------------------------------------------------------------------------------------');

    console.log(`${letra} ${letraAluno} ${nomeA} foi ${status} na disciplina ${nomeDisciplina}.`);
    console.log(`Curso: ${nomeCurso}`);
    console.log(`${letraProfessor}: ${nomeP}`);
    console.log(`Notas do aluno: ${n1}, ${n2}, ${n3}, ${n4}`);
    console.log(`Média Final: ${media}`);

    process.exit(0);
}

module.exports = {
    calculoNota,
    calculoExame,
    resultado
};