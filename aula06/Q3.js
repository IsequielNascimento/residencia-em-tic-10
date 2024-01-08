/*3. A partir do exercício 1, crie uma função que receba dois parâmetros:
Estrutura que você escolheu no exercício 1
Um número que representará o índice da coluna dos compartimentos da estante
A função deve retornar:
As informações de todas as caixas que estão nos compartimentos na coluna solicitada */

const estante = [
    //Compartimento 1
    [
        { id: 1, cor: "vermelho" },// Coluna 0
        { id: 2, cor: "azul" }, // Coluna 1
        { id: 3, cor: "amarelo" } // Coluna 2
    ],
    //Compartimento 2
    [
        { id: 4, cor: "Laranja" }, // Coluna 0
        { id: 5, cor: "Verde" }, // Coluna 1
        { id: 6, cor: "roxo" } // Coluna 2
    ],
    //Compartimento 3
    [
        { id: 7, cor: "Lilás" }, // Coluna 0
        { id: 8, cor: "Azul 2" }, // Coluna 1
        { id: 9, cor: "Cinza" } // Coluna 2
    ],
]

function obterCaixasPorColuna(estante, indiceColuna) {
    const caixasNaColuna = [];

    for (let i = 0; i < estante.length; i++) {
        const nivel = estante[i];
       // console.log("Nível: ", nivel);
        const caixa = nivel[indiceColuna];
      //  console.log("Caixa: ", caixa);
        caixasNaColuna.push(caixa); // .push() adiciona um elemento no final do array, no caso a caixa que foi encontrada na coluna
       
    }

    return caixasNaColuna;
}

const colunaDesejada = 0;
const caixasNaColuna = obterCaixasPorColuna(estante, colunaDesejada);

console.log(`\n Caixas na Coluna ${colunaDesejada}:`);
console.log(caixasNaColuna);