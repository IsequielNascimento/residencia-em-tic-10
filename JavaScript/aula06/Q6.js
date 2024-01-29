/*A função deve retornar:
A mensagem "O parâmetro deve ser uma lista!", caso o parâmetro não seja uma lista
Uma lista com todos os números sem repetições, caso os parâmetros estejam no formato correto
Uma lista vazia, caso a lista esteja vazia */


const numbers = [1, 2, 3, 3, 2, 4, 0];
console.log(uniqueValues(numbers));
/* resultado no terminal deve ser:
[1, 2, 3, 4, 0]
*/

console.log(uniqueValues([]));
/* resultado no terminal deve ser:
[]
*/

console.log(uniqueValues(2));
/* resultado no terminal deve ser:
O parâmetro deve ser uma lista!
*/

function uniqueValues(lista) {
    if (!Array.isArray(lista)) {
        return "O parâmetro deve ser uma lista!";
    }

    if (lista.length === 0) {
        return [];
    }

    const uniqueList = [...new Set(lista)]; /* new Set() cria um objeto do tipo Set, que é uma lista que não aceita valores repetidos. O operador ... (spread) transforma o Set em uma lista novamente. */
    return uniqueList;
}

