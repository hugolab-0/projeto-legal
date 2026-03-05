// importa o arquivo de validações
const validar = require('./validacoes.js');


// função responsável por calcular a média das notas
function calculoNota(nota1, nota2, nota3, nota4, sexoProfessor, sexoAluno, nomeProfessor, nomeAluno, curso, disciplina) {
    
    // converte as notas para número
    let n1 = Number(nota1);
    let n2 = Number(nota2);
    let n3 = Number(nota3);
    let n4 = Number(nota4);

    // chama a função que valida se os valores são válidos
    validar.validacoes(n1, n2, n3, n4);

    // soma todas as notas
    let somaNotas = n1 + n2 + n3 + n4;

    // calcula a média final
    let mediaFinal = somaNotas / 4;

    // variável que armazenará o status do aluno
    let statusFinal;

    // verifica se o aluno foi aprovado direto
    if (mediaFinal >= 70) {
        statusFinal = 'Aprovado';
    } 
    // verifica se foi reprovado direto
    else if (mediaFinal < 50) {
        statusFinal = 'Reprovado';
    } 
    // caso esteja entre 50 e 69 vai para exame
    else {
        statusFinal = calculoExame(mediaFinal);
    }

    // chama a função que define as palavras corretas de acordo com o sexo
    let sexoInfo = sexoEscolhido(sexoProfessor, sexoAluno);

    // chama a função que exibe o resultado final
    resultado(
        n1,
        n2,
        n3,
        n4,
        nomeProfessor,
        nomeAluno,
        curso,
        disciplina,
        mediaFinal,
        statusFinal,
        sexoInfo.letra,
        sexoInfo.prof,
        sexoInfo.alun
    );
}


// função que calcula o resultado caso o aluno vá para exame
function calculoExame(media) {

    // se a média final com exame for maior ou igual a 60
    if (media >= 60) {
        return 'Aprovado';
    } 
    // caso contrário é reprovado
    else {
        return 'Reprovado';
    }
}


// função que ajusta as palavras conforme o sexo do professor e do aluno
function sexoEscolhido(sexo1, sexo2){

    // transforma o texto em minúsculo para evitar erro de comparação
    let sexoProf = sexo1.toLowerCase();
    let sexoAl = sexo2.toLowerCase();

    let letra;
    let prof;
    let alun;

    // professor masculino e aluno masculino
    if(sexoProf == 'masculino' && sexoAl == 'masculino'){
        letra = 'O';
        prof = 'Professor';
        alun = 'aluno';
    }

    // professor masculino e aluna
    else if (sexoProf == 'masculino' && sexoAl == 'feminino'){
        letra = 'A';
        prof = 'Professor';
        alun = 'aluna';
    }

    // professora e aluno
    else if (sexoProf == 'feminino' && sexoAl == 'masculino'){
        letra = 'O';
        prof = 'Professora';
        alun = 'aluno';
    }

    // professora e aluna
    else if (sexoProf == 'feminino' && sexoAl == 'feminino'){
        letra = 'A';
        prof = 'Professora';
        alun = 'aluna';
    }

    // retorna os valores para serem usados no resultado
    return {letra, prof, alun}
}


// função responsável por mostrar o resultado final no console
function resultado(
    nota1, 
    nota2, 
    nota3, 
    nota4,  
    nomeProfessor, 
    nomeAluno, 
    curso, 
    disciplina, 
    mediaFinal, 
    statusFinal,
    letra,
    professor,
    aluno
) {

    // converte novamente para garantir que são números
    let n1 = Number(nota1);
    let n2 = Number(nota2);
    let n3 = Number(nota3);
    let n4 = Number(nota4);

   // exibe a média final
    console.log('--------------------------------------------------------------------------------------');

    console.log(`${letra} ${aluno} ${nomeAluno} foi ${statusFinal} na disciplina ${disciplina}.`);
    console.log(`Curso: ${curso}`);
    console.log(`${professor}: ${nomeProfessor}`);
    console.log(`Notas do aluno: ${n1}, ${n2}, ${n3}, ${n4}`);
    console.log(`Média Final: ${mediaFinal}`);

    // encerra o programa
    process.exit(0);
}


// exporta as funções para serem usadas em outros arquivos
module.exports = {
    calculoNota,
    calculoExame,
    resultado,
    sexoEscolhido
};