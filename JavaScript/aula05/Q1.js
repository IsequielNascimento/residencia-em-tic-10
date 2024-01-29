/*01 - Crie uma função que receba um array de números e um função de callback. A função de callback deve filtrar os números passados do array e devolver somente os números positivos. Por exemplo: */


let numeros = [-2, 3, 0, 4, 2 - 1, -4, 8]
let numerosPositivos = funcaoPrincipal(numeros, callback)
// numerosPositivos ===> [3, 2, 8]
function funcaoPrincipal(number, callback) {
    return console.log(callback(number))
}
function callback(numbers) {
    let positivos = []
    let totalPosi = 0
    for (let t = 0; t < numbers.length; t++) {
        if (numbers[t] >= 0) totalPosi++;
    }
    for (let i = 0; i < totalPosi; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (numbers[j] >= 0) {
                positivos[i] = numbers[j]
                i++
            }
        }
    }
    return positivos
}