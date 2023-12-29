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

/*4. Crie uma função chamada mapProductsRemoveId que receba como parâmetro:
Uma lista de objetos que representarão produtos
A função deve retornar:
A mensagem "O parâmetro deve ser uma lista!", caso o parâmetro não seja uma lista
Uma nova lista com o(s) produto(s) sem a propriedade id, caso a lista tenha produtos
Uma nova lista vazia, caso a lista esteja vazia*/
function mapProductsRemoveId(productList) {
    let removeID = [...productList]
    typeof productList !== "object" ? console.log("O primeiro parâmetro deve ser uma lista") : null
    for (let index = 0; index < productList.length; index++) {
    removeID[index].id = ""
    }
    console.log(removeID)
}

console.log(mapProductsRemoveId(products))
// console.log(mapProductsRemoveId(products))
// /* resultado no terminal deve ser:
// [
//     {
//         name: 'Jogo de Panelas',
//         price: 54.59
//     },
//     {
//         name: 'Chocolate L',
//         price: 14.99
//     },
//     {
//         name: 'Sabão Lili'
//         price: 29.99
//     }
// ]
// */

// console.log(mapProductsRemoveId([]))
// /* resultado no terminal deve ser:
// []
// */

// console.log(mapProductsRemoveId(2))
// /* resultado no terminal deve ser:
// O parâmetro deve ser uma lista!
// */
