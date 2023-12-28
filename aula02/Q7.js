//7. A partir do código abaixo, desenvolva um algoritmo utilizando a estrutura de repetição while que imprima no terminal apenas os produtos com o preço abaixo de R$ 10,50:
// Observação: altere os valores da constante products explorando possíveis casos.
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

let index = 0;
while(index < products.length){

    if(products[index].price < 10.50){
        console.log(products[index])
    }
    index++;
}