function validacao(valor1, valor2){

    let n1 = Number(valor1);
    let n2 = Number(valor2);

    if (valor1 == '' || valor2 == ''){
        console.log('ERRO: digite valores válidos');
        return false
    }

    else if (isNaN(n1) || isNaN(n2)){
        console.log('ERRO: use somente números');
        return false
    }

    else if (n1 < 0 || n1 > 500){
        console.log('ERRO: o número inicial deve ser entre 0 e 500');
        return false
    }

    else if (n2 < 100 || n2 > 1000){
        console.log('ERRO: o número final deve ser entre 100 e 1000');
        return false
    }

    else if (n1 == n2){
        console.log('ERRO: os números não podem ser iguais');
        return false
    }

    else if (n1 > n2){
        console.log('ERRO: o número inicial não pode ser maior que o final');
        return false
    }

    else{
        return true
    }

}

function separar(numero1, numero2){

    let valor1 = Number(numero1);
    let valor2 = Number(numero2);

    let contImpar = 0;
    let contPar = 0;

    console.log('\nLista de números Pares')

    for(let i = valor1; i <= valor2; i++){

        if(i % 2 == 0){
            console.log(i)
            contPar++
        }

    }

    console.log(`Qtde de números encontrados: ${contPar}`)

    console.log('\nLista de números Ímpares')

    for(let i = valor1; i <= valor2; i++){

        if(i % 2 != 0){
            console.log(i)
            contImpar++
        }

    }

    console.log(`Qtde de números encontrados: ${contImpar}`)
}

module.exports ={
    validacao,
    separar
}