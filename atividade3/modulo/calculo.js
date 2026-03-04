function validacao (n1, n2, n3, n4){

    let valor1 = Number(n1);
    let valor2 = Number(n2);
    let valor3 = Number(n3);
    let valor4 = Number(n4);

    if(isNaN(valor1) || 
       isNaN(valor2) || 
       isNaN(valor3) || 
       isNaN(valor4)){

        console.log ('ERRO: os dados recebidos contem letras escrva novamente com números')
    }
    else if(valor1 > 100 || valor1 < 0 ||
            valor2 > 100 || valor2 < 0 ||
            valor3 > 100 || valor3 < 0 ||
            valor4 > 100 || valor4 < 0
    ){

        console.log('ERRO: os valores não sao validos')
    }
    else if(valor1 == '' ||
            valor2 == '' ||
            valor3 == '' ||
            valor4 == '' 
    ){
        console.log('ERRO: preencha com valores validos')
    }

}

function calcularTabuada (valor1, valor2, valor3, valor4){

    let tabInicial =  Number(valor1);
    let tabFinal   =  Number(valor2);

    let contInicial =  Number(valor3);
    let contFinal   =  Number(valor4);

    while(tabInicial <= tabFinal){

        console.log('-------------------------------------------------------------')

        for(let cont = contInicial; cont <= contFinal; cont++){

            let resultado = tabInicial * cont
            console.log(`${tabInicial} x ${cont} = ${resultado}`)
        }

        console.log('-------------------------------------------------------------')

        tabInicial++
    }

    process.exit(0);
}
module.exports = {
    calcularTabuada,
    validacao
}