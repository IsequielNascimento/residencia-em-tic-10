/* Crie uma função chamada innerJoin que receba dois parâmetros:
Uma lista de números
Uma lista de números
A função deve retornar:
A mensagem "O primeiro parâmetro deve ser uma lista!", caso o primeiro parâmetro não seja uma lista
A mensagem "O segundo parâmetro deve ser uma lista!", caso o segundo parâmetro não seja uma lista
Uma lista com todos os números que estão em ambas as listas, caso os parâmetros estejam no formato correto
Uma lista vazia, caso não haja números que estão em ambas as listas */
const numbers1 = [1, 2, 3, 3, 2, 4, 0]
const numbers2 = [1, 2, 3, 5, 10]

console.log(innerJoin(numbers1, numbers2))
/* resultado no terminal deve ser:
[1, 2, 3]
*/

console.log(innerJoin([], numbers2))
/* resultado no terminal deve ser:
[]
*/

console.log(innerJoin(2, numbers2))
/* resultado no terminal deve ser:
O primeiro parâmetro deve ser uma lista!
*/

function innerJoin(lista1, lista2) {
    if (!Array.isArray(lista1)) {
        return "O primeiro parâmetro deve ser uma lista!";
    }

    if (!Array.isArray(lista2)) {
        return "O segundo parâmetro deve ser uma lista!";
    }

    const set1 = new Set(lista1); // Cria um objeto do tipo Set, que é uma lista que não aceita valores repetidos.
    const intersection = [...new Set(lista2.filter(numero => set1.has(numero)))]; // O operador ... (spread) transforma o Set em uma lista novamente e o método filter() filtra os números que estão em ambas as listas.
    return intersection;
}
