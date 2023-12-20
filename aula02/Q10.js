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

let ordem = [...products];
// let menor = 0;

for(let i = 0; i < products.length; i++){
    for(let j = 0; j < products.length; j++){
      if (products[j].price < ordem[i].price){
                ordem[i] = products[j];
        }
        
    }
    console.log(ordem[i])
}


// for(let i = 0; i < products.length; i++){
//     for(let j = 0; j < products.length; j++){
//         if(products[j].price < ordem[i].price){
//             console.log(ordem)
//         }
//     }
// }