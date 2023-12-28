
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

function showProductsInfo(productList, callback) {
    if (!Array.isArray(productList)) {
        callback("O parâmetro deve ser uma lista!", null);
        return;
    }

    if (productList.length === 0) {
        callback("A lista não possui produtos!", null);
        return;
    }

    for (let index = 0; index < productList.length; index++) {
        const product = productList[index];
        const infoProduct = `
            Id do produto: ${product.id}
            Nome do produto: ${product.name}
            Preço do produto: ${product.price}
        `;
        callback(null,infoProduct);
    }
    return "Fim da lista"
}

function handleResult(error, result) {
    if (error) {
        console.log("Erro: " + error);
    } else {
        console.log(result);
    }
}
showProductsInfo(products, handleResult);
console.log(`\n================================================\n`)
showProductsInfo([], handleResult);
console.log(`\n================================================\n`)
showProductsInfo(2, handleResult)
console.log(`\n================================================\n`)

// console.log(showProductsInfo(2, handleResult),`\n`);

// console.log(showProductsInfo(products, handleResult))
