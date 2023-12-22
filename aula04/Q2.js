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

function findUserById (user, userID){
    let ID = userID
    validar(user, userID)
   
}

    function validar(checkUser, checkID) {
        if (typeof checkUser === "string" || typeof checkUser === "number") {
            console.log("O parâmetro deve ser uma lista.");
    
        }
        else if (checkUser[0] === undefined) {
            console.log("A lista não possui produtos");
        }else if(typeof checkID !== "number"){
            console.log("O segundo parâmetro deve ser um número!");
        }
        else {
            percorrerlista(checkUser, checkID);
        }
    }
    function percorrerlista(listaUser, idUser) {
        let notUser = 0

        for (let index = 0; index < listaUser.length; index++) {
           
                if( listaUser[index].id === idUser ){
                    console.log(listaUser[index])
                    notUser = 0;
                } else{
                    notUser = 1;
                }
            
        }
        if( notUser === 1){
            console.log("User não encontrado");
        }
    }