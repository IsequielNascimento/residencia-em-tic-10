/*03 - Crie um função que receba um array de 10 números e faça o somatório dos números ímpares. (Utilize HOF) Por exemplo:

    let numeros=[0, 2, 1, 5, 7, 0, 2, 21, 1, 3]
    //Números a serem somados 1, 5, 7, 21, 1,3 
    let resultado = funcao(numeros)
    resultado ==> 38
*/
// HOFs usadas: filter e reduce
// Filter para pegar os números ímpares e reduce para somar os números
function somatorioNumerosImpares(numeros) {
    const numerosImpares = numeros.filter(numero => numero % 2 !== 0);
    const resultado = numerosImpares.reduce((soma, numero) => soma + numero, 0);
    return resultado;
}

let numeros = [1, 5, 1, 5, 7, 0, 2, 21, 1, 3];
let resultado = somatorioNumerosImpares(numeros);

console.log(resultado);
