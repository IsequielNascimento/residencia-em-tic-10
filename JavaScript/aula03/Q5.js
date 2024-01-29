//05.Crie uma função que receba diversos argumentos que serão números e retorne a soma de todos;

let lista = [2,3,5,1,4,5];
function somatorio(){
let soma = 0;
    for(let index = 0; index < lista.length; index++ ){
        soma += lista[index];
        
    }
    return soma;
}

console.log(somatorio(lista));