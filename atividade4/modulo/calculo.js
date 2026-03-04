function validacao (numero1){

    // Converte o valor recebido (string) para Number
    let n1 = Number(numero1);

    // Verifica se o valor NÃO é número ou está vazio
    // isNaN(n1) → true se não for número válido
    // n1 == '' → aqui não funciona como esperado, pois n1 já é Number
    if(isNaN(n1) || n1 == ''){
        console.log('ERRO: digite vaçores validos para octer o resultado')
    }

    // Bloqueia os valores 0 e 1
    // (mas matematicamente 0! e 1! existem e são iguais a 1)
    else if(n1 == 1 || n1 == 0){
        console.log('ERRO: não é possivel fazer um calculo fatorial com o valor recebido')
    };

};

function calcularFatorial(valor1) {

    // Converte o valor recebido para número
    let i = Number(valor1);

    // Variável acumuladora do resultado (começa com 1)
    let resultado = 1; 

    // Enquanto i for maior que 1
    // Multiplica o resultado por i e depois decrementa
    while (i > 1) {
        resultado *= i; 
        i--;
    }

    // Exibe o resultado final do cálculo
    console.log(`O fatorial de ${valor1} é: ${resultado}`);

    // Encerra o programa imediatamente
    process.exit(0);
};

// Exporta as funções para serem usadas em outro arquivo
module.exports = {
    validacao,
    calcularFatorial
}