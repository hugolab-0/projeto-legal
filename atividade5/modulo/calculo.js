function validacao (valor1, valor2){
    
    let n1 = Number(valor1);
    let n2 = Number(valor2);

    if (isNaN(n1)||
        isNaN(n2)){

            console.log ('ERRO: use somente número');
        }
    else if (n1 == '' ||
             n2 == ''){

                console.log ('ERRO: digite valores validos');
        }
    else if (n1 >= n2){

            console.log ('ERRO: o número inicial não deve ser maio que o número final');
        }
    else {
        return true
    }


}

function separar (numero1, numero2){

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);
}
module.exports ={
    validacao
}