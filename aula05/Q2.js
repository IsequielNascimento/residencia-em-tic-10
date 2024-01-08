/*02 - Crie uma função que receba um array de objetos de compra, um array de objetos de produto
 e uma função de callback.A função de callback deve verificar
  a identificação dos produtos presentes no objeto da compra
   e criar um novo objeto que substitua o identificador pelo objeto do produto.
   
Por exemplo:*/
/* let produtos =[
        {id:1, nome:"Traquinas", peso:"500g"},
        {id:2, nome:"Negresco", peso:"300g"},
        {id:3, nome:"Floresta Negra", peso:"370g"}
        ]
    let compras=[
        {id:1, produto_id:1, qtd:3},
        {id:2, produto_id:2, qtd:4}
        ]
    let comprasMapeadas = funcao(compras, produtos, mapeaCompra)

    comprasMapeadas ===> [
        {id:1, produto:{id:1, nome:"Traquinas", peso:"500g"}, qtd:3},
        {id:2, produtos:{id:2,nome:"Negresco", peso:"300g"}, qtd:4}
    ] */

let produtos = [
    { id: 1, nome: "Traquinas", peso: "500g" },
    { id: 2, nome: "Negresco", peso: "300g" },
    { id: 3, nome: "Floresta Negra", peso: "370g" }
];

let compras = [
    { id: 1, produto_id: 1, qtd: 3 },
    { id: 2, produto_id: 2, qtd: 4 }
];

let comprasMapeadas = mapearCompras(compras, produtos, mapeaCompra);

function mapeaCompra(compra, produtos) {
    const produtoEncontrado = produtos.find(produto => produto.id === compra.produto_id);

    if (produtoEncontrado) {
        return {
            id: compra.id,
            produto: { ...produtoEncontrado },
            qtd: compra.qtd
        };
    } else {
        return null; // Retorna null se o produto não for encontrado
    }
}

function mapearCompras(compras, produtos, callback) {
    const comprasMapeadas = [];

    compras.forEach(compra => {
        const resultadoCallback = callback(compra, produtos);

        if (resultadoCallback !== null) {
            comprasMapeadas.push(resultadoCallback);
        }
    });

    return comprasMapeadas;
}


console.log(comprasMapeadas);
