/*3. Crie uma função chamada filterProductByName que receba dois parâmetros:
Uma lista de objetos que representarão produtos
Uma string que representará o nome do produto
A função deve retornar:
A mensagem "O primeiro parâmetro deve ser uma lista!", caso o primeiro parâmetro não seja uma lista
A mensagem "O segundo parâmetro deve ser uma string!", caso o segundo parâmetro não seja uma string
Uma nova lista com o(s) produto(s) pesquisado(s), caso exista(m)
Uma nova lista vazia, caso não exista */

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


function filterProductByName(listProducts, product) {
    const existProduct = []
    const notExistProduct = []

    if (typeof listProducts !== "object") {
        console.log("O primeiro parâmetro deve ser uma lista")
        process.exit()
    }
    else if (typeof product !== "string") {
        console.log("O segundo parâmetro deve ser uma string")
        process.exit()
    }

    for (let index = 0; index < listProducts.length; index++) {
        if (listProducts[index].name === product) {
            existProduct.push(listProducts[index])
        }
    }
    if (existProduct[0] !== undefined) {
        console.log("Produtos econtrados: ", existProduct)
    }
    else {
        console.log("Produtos não localizados: ", notExistProduct)
    }

}
console.log(filterProductByName(products, 'Chocolate L'))
/* resultado no terminal deve ser:
[
    {
        id: 2,
        name: 'Chocolate L',
        age: 14.99
    }
]
*/

console.log(filterProductByName(products, 'Arroz'))
/* resultado no terminal deve ser:
[]
*/

console.log(filterProductByName(products, 2))
/* resultado no terminal deve ser:
O segundo parâmetro deve ser uma string!
*/