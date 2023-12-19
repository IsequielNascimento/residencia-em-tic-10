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
let atual = null;
let menor = null;
let percorrerLista = 0
let ordem = [...products];

for(let index = 0; index< products.length; index++){
    atual = products[index]

        if(menor === null){
            menor = products[index]
            ordem[index] = menor
        }else if( products[index].price < ordem[percorrerLista].price ){
            
            ordem[percorrerLista] = products[index]
            console.log("----------------")
            console.log(ordem[percorrerLista])
        }else{
            for( percorrerLista; percorrerLista === ordem.length ;percorrerLista++){
                if( products[index].price > ordem[percorrerLista].price){
                    
                }
            }
            
        }
}


// ...