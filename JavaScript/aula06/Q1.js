/*1. Ceverino tem uma estante com três compartimentos um em cima do outro. Cada compartimento comporta três caixas uma ao lado da outra. As caixas possuem duas características que o Ceverino sempre observa: cor da caixa e a numeração escrita nela. Sabendo disso, escolha uma estrutura de dados para representar a estante de Ceverino e um tipo de dado para representar a caixa.
*/

const estante = [
    //Compartimento 1
    [
        { id: 1, cor: "vermelho" },
        { id: 2, cor: "azul" },
        { id: 3, cor: "amarelo" }
    ],
    //Compartimento 2
    [
        { id: 4, cor: "Laranja" },
        { id: 5, cor: "Verde" },
        { id: 6, cor: "roxo" }
    ],
    //Compartimento 3
    [
        { id: 7, cor: "Lilás" },
        { id: 8, cor: "Azul 2" },
        { id: 9, cor: "Cinza" }
    ],
]

console.log(estante[1][1])

const caixaEscolhida = estante[1][1];
console.log(caixaEscolhida);