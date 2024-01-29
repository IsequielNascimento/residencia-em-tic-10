/*10. A partir do código abaixo, desenvolva um algoritmo que imprima no terminal a lista de produtos ordenada crescentemente pelo preço:*/
const products = [
    {
        name: 'Caixa de Sabão Z',
        price: 30.99
    },
    {
        name: 'Chocolate X',
        price: 10.4
    },
    {
        name: 'Arroz T',
        price: 8.3
    },
    {
        name: 'Salgadinho F',
        price: 10.5
    }
]


let aux;
for (let i = 0; i < products.length; i++) {
    for (let j = i; j < products.length; j++) {
        if (products[i].price > products[j].price) {
            aux = products[i];
            products[i] = products[j];
            products[j] = aux;
        }
    }

}
console.log(products)

