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

function findUserById (user, ID){
    // let ID = id
   
}

    function validar(check) {
        if (typeof check === "string" || typeof check === "number") {
            console.log("O parâmetro deve ser uma lista.");
    
        }
        else if (check[0] === undefined) {
            console.log("A lista não possui produtos");
        }
        else {
            percorrerlista(check);
        }
    }

    function percorrerlista(percorrer) {
        for (let index = 0; index < percorrer.length; index++) {
           
                if( user[index].id === ID ){
                    console.log(user[index])
                }
            
        }
    }