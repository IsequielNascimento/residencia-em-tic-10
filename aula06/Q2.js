/*2. A partir do exercício 1, crie uma função que receba dois parâmetros:
Estrutura que você escolheu no exercício 1
Um número que representará o índice do compartimento da estante
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

function obterCaixasPorCompartimento(estante, indiceCompartimento) {
    if (indiceCompartimento >= 0 && indiceCompartimento < estante.length) {
        return estante[indiceCompartimento];
    } else {
        console.error('Índice de compartimento inválido.');
        return null;
    }
}


const compartimentoDesejado = 1;
const caixasDoCompartimento = obterCaixasPorCompartimento(estante, compartimentoDesejado);
console.log(`\n Caixas do Compartimento ${compartimentoDesejado}:`);
console.log(caixasDoCompartimento);