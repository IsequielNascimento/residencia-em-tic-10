function operacao(operacao, number1, number2){

    switch(operacao){
        case "soma": 
          console.log("Resultado da soma:", soma(number1, number2));
            break
        case "subtração":
            console.log("Resultado da subtração: ",subtração(number1,number2));
            break
        case "multiplicação":
            console.log("Resultado da multiplicação",multiplicacao(number1,number2));
            break
        case "divisao":
            console.log("Resultado da divisão",divisao(number1,number2));
            break
        default:
            console.log("Insira uma operação válida: soma, subtração, multiplicação, divisão")
    }
return operacao;
}

function soma(number1,number2){
    
    return number1+number2;
}

function subtração(number1,number2){
    return number1-number2;
}

function divisao(number1, number2){
    return number1 / number2;
}
function multiplicacao(number1, number2){
    return number1 * number2;
}



export {operacao};