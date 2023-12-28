
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

//console.log(showProductsInfo(products))
/* resultado no terminal deve ser:
Id do produto: 1
Nome do produto: Jogo de Panelas
Preço do produto: R$ 54.59

Id do produto: 2
Nome do produto: Chocolate L
Preço do produto: R$ 14.99

Id do produto: 3
Nome do produto: Sabão Lili
Preço do produto: R$ 29.99
*/

//console.log(showProductsInfo([]))
/* resultado no terminal deve ser:
A lista não possui produtos!
*/

//console.log(showProductsInfo(2))
/* resultado no terminal deve ser:
O parâmetro deve ser uma lista!
*/
function validar(check) {
    if (typeof check === "string" || typeof check === "number") {
        console.log("O parâmetro deve ser uma lista.");

    }
    else if (check[0] === undefined) {
        console.log("A lista não possui produtos");
    }
    else {
        percorrerlista(check);
    }
}

function percorrerlista(percorrer) {
    for (let index = 0; index < percorrer.length; index++) {
        console.log(`
            Id do produto: ${percorrer[index].id}
            Nome do produto: ${percorrer[index].name}
            Preço do produto: ${percorrer[index].price}
            `);
    }
}
function showProductsInfo(produtosList) {
let checagem = 1;

if( checagem === 1){
    validar(produtosList)
    checagem--;
} else{
    percorrerlista(produtosList)
}
    return;

}

let confia = "hakuna matata";
// validarLista(confia)
// validarLista(products);

console.log("---------------------------")
console.log(showProductsInfo(products))

console.log("---------------------------")
console.log(showProductsInfo([]))
/* resultado no terminal deve ser:
A lista não possui produtos!
*/
console.log("---------------------------")
console.log(showProductsInfo(2))
/* resultado no terminal deve ser:
O parâmetro deve ser uma lista!
*/