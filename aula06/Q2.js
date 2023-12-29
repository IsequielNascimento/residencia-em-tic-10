/*2. A partir do exercício 1, crie uma função que receba dois parâmetros:
Estrutura que você escolheu no exercício 1
Um número que representará o índice do compartimento da estante
*/

const estante = [
    [{ id: 1, cor: "vermelho" }, { id: 2, cor: "azul" }, { id: 3, cor: "amarelo" }],
    [{ id: 4, cor: "cor sim" }, { id: 5, cor: "cor não" }, { id: 6, cor: "roxo" }],
    [{ id: 7, cor: "vermelho" }, { id: 8, cor: "vermelho 2" }, { id: 9, cor: "vermelho 3" }],
]

console.log(estante[1][1])

function locateBox(estante, indice) {

    for (let i = 0; i < estante.lenght; i++) {
        for (let j = 0; j < estante.lenght; i++) {
            if (estante[i][j].id === indice) {
                return console.log(estante[i][j])
            }
        }

    }

}

locateBox(estante, 7)