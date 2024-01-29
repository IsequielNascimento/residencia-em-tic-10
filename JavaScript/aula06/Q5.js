/*5. A partir do exercício 1, crie uma função que receba dois parâmetros:
Estrutura que você escolheu no exercício 1
A função deve retornar:
As informações de todas as caixas que estão na diagonal secundária da estante */

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

function obterCaixasDiagonalSecundaria(estante) {
    const caixasDiagonalSecundaria = [];

    for (let i = 0; i < estante.length; i++) {
        const nivel = estante[i];
        const indiceDiagonalSecundaria = estante.length - 1 - i;


        const caixa = nivel[indiceDiagonalSecundaria];
        caixasDiagonalSecundaria.push(caixa);

    }

    return caixasDiagonalSecundaria;
}

const caixasDiagonalSecundaria = obterCaixasDiagonalSecundaria(estante);

console.log("Caixas na Diagonal Secundária:");
console.log(caixasDiagonalSecundaria);
// Resultado esperado: { id: 3, cor: "amarelo" }, { id: 5, cor: "Verde" }, { id: 7, cor: "Lilás" }