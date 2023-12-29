/*Refaça a questão 03 de modo que as operações básicas sejam funções que serão chamadas dentro da função principal*/

/* 03.Crie uma função que receba uma string que pode ser uma das quatro operações básicas da matemática('soma', 'subtração', 'multiplicação' e 'divisão') como primeiro argumento,e o segundo e terceiro como números em que essa operação seja aplicada .*/
        //Exemplo
        // funcao('soma', 1, 2)
        // //return
        // 3


        function operacao(operacao, number1, number2){

            switch(operacao){
                case "soma": 
                  console.log(soma(number1, number2));
                    break
                case "subtração":
                    console.log(subtração(number1,number2));
                    break
                case "multiplicação":
                    console.log(multiplicacao(number1,number2));
                    break
                case "divisao":
                    console.log(divisao(number1,number2));
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
    operacao('multiplicação',2,3)