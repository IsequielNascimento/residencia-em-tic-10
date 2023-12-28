const users = [
    {
        id: 1,
        name: 'Carlos Júnior',
        age: 26
    },
    {
        id: 2,
        name: 'Ceverino Cordeiro',
        age: 70
    }
]

console.log(findUserById(users, 2))
/* resultado no terminal deve ser:
{
    id: 2,
    name: 'Ceverino Cordeiro',
    age: 70
}
*/

console.log(findUserById(users, 5))
/* resultado no terminal deve ser:
null
*/

console.log(findUserById(users, '2'))
/* resultado no terminal deve ser:
O segundo parâmetro deve ser um número!
*/

function findUserById(lista, id){

}