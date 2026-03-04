/*****************
 * objetivo: Desenvolver um sistema para fazer o calculo de IMC do usuario
 * 
 * autor: Hugo
 * versão: 1.0
 ******************/

function validacoes(entrada1, entrada2) {

    entrada1 = Number(String(entrada1).replace(',', '.'));
    entrada2 = Number(String(entrada2).replace(',', '.'));

    let valor1 = entrada1;
    let valor2 = entrada2;


    if (valor1 == '' || valor2 == '' || isNaN(valor1) || isNaN(valor2)){
        console.log('ERRO: Os valores solicitados não foram preenchidos ou são invalidos');
    }
    else{
        return calculoImc(valor1, valor2);
    }

}

function calculoImc (valor1, valor2){

    if (!validar) {
        console.log('Valores inválidos')
        return
    }
    else if (n1 == 0 || n2 ==0){
        console.log('probloma com os valores recebidos')
    }

    let n1 = Number(valor1);
    let n2 = Number(valor2);

    let altura = n2 * n2;
    let resultado = n1 / altura;

    if (resultado < 18.5){
        console.log('Abaixo do peso');
    }
    else if (resultado >= 18.5 && resultado < 24.9){
        console.log('Peso normal');
    }
    else if (resultado >= 25 && resultado <= 29.9 ){
        console.log('Acima do peso(Sobrepeso)');
    }
    else if (resultado >= 30 && resultado <= 34.9 ){
        console.log('Obesidade I');
    }
    else if (resultado >= 35 && resultado <= 39.9 ){
        console.log('Obesidade II');
    }
    else if (resultado >= 40){
        console.log('Obesidade III');
    };

    process.exit(0);
    
};
module.exports = {
    calculoImc,
    validacoes
};