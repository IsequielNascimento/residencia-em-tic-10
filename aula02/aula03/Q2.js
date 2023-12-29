/*02 - Crie uma função que receba um array de um tamanho qualquer com números fornecidos pelo usuário e que retorne a multiplicacão entre o primeiro e último item, como também o resto entre esses dois números. Por exemplo:*/
numeros = [4, 2, 4, 5, 3, 2, 7, 9, 0, 2];


function multiplicacao(primeiro, ultimo){
   let mult = primeiro * ultimo;
    console.log(mult);
    return mult;
}
function divisao(primeiro,ultimo){
   let div = primeiro % ultimo;
    console.log(div);
    return div;
}
multiplicacao(numeros[0],numeros[numeros.length-1]);
divisao(numeros[0],numeros[numeros.length-1])