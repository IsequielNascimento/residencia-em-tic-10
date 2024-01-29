/*A função deve retornar:
A mensagem "O parâmetro deve ser uma lista!", caso o parâmetro não seja uma lista
O resultado da soma dos preços dos produtos, caso a lista tenha produtos
O valor 0, caso a lista esteja vazia
Exemplo:

*/
const products = [
    {
        id: 1,
        name: 'Jogo de Panelas',
        price: 54.59
    },
    {
        id: 2,
        name: 'Chocolate L',
        price: 14.99
    },
    {
        id: 3,
        name: 'Sabão Lili',
        price: 29.99
    }
]

function sumProductsPrice(productList){
    if (typeof productList !== "object") {
        console.log("O primeiro parâmetro deve ser uma lista")
        process.exit()
    }
    let soma = 0
    for(let index = 0; index < productList.length; index++){
        soma += productList[index].price
    }
    console.log("A soma dos produtos é: ", soma)
}
console.log(sumProductsPrice(products))
/* resultado no terminal deve ser:
99.57
*/

console.log(sumProductsPrice([]))
/* resultado no terminal deve ser:
0
*/

console.log(sumProductsPrice(2))
/* resultado no terminal deve ser:
O parâmetro deve ser uma lista!
*/