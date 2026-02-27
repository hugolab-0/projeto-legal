const validar = require('./validacoes.js');

function calculoMedia(valor1, valor2, valor3, valor4, sexo1, sexo2, nome1, nome2, curso1, disciplina1) {

    let n1 = Number(valor1);
    let n2 = Number(valor2);
    let n3 = Number(valor3);
    let n4 = Number(valor4);

    let sexoP = sexo1;
    let sexoA = sexo2;
    let final;

    let nomeP = nome1;
    let nomeA = nome2;
    let curso = curso1;
    let disciplina = disciplina1;

    let validarNumero = validar.validacoes(n1, n2, n3, n4);

    let somarNostas = n1 + n2 + n3 + n4;
    let resultado = somarNostas / 4;

    if (resultado >= 70) {
        final = 'Aprovado';
    } 
    else if (resultado < 50) {
        final = 'Reprovado';
    } 
    else if (resultado >= 50 && resultado <= 69.9) {
        let resultado2 = calculoExame(final);
    }

    if (sexoP == 'masculino' && sexoA == 'masculino') {
        
         console.log(`O aluno ${nomeA} foi ${final} na disciplina ${disciplina}.`)
         console.log(`Curso: xxxxxxxx`);
         console.log(`Professor: xxxxxxxx`);
         console.log(`Notas do aluno: Nota1, Nota2, Nota3, Nota4`);
         console.log(`Média Final: xxxxxx`);
    } 
    else if (sexoP == 'masculino' && sexoA == 'feminino') {

    } 
    else if (sexoP == 'feminino' && sexoA == 'feminino') {

    }

    process.exit(0);
}

function calculoExame(valor1) {

    let n1 = Number(valor1);

    if (n1 >= 60) {
        final = 'Aprovado';
    } else {
        final = 'Reprovado';
    }
}

module.exports = {
    calculoMedia,
    calculoExame
};