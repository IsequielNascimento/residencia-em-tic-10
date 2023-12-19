/* 03.Crie uma função que receba uma string que pode ser uma das quatro operações básicas da matemática('soma', 'subtração', 'multiplicação' e 'divisão') como primeiro argumento,e o segundo e terceiro como números em que essa operação seja aplicada .*/
        //Exemplo
        // funcao('soma', 1, 2)
        // //return
        // 3


function operacao(operacao, number1, number2){

    switch(operacao){
        case "soma": 
           console.log(number1 + number2);
            break
        case "subtração":
            console.log(number1 - number2);
            break
        case "multiplicação":
            console.log(number1 * number2);
            break
        case "divisao":
            console.log(number1 / number2);
            break
        default:
            console.log("Insira uma operação válida: soma, subtração, multiplicação, divisão")
    }
return operacao;
}

operacao('subtração',2,2)