/* //6. A partir do código abaixo, desenvolva um algoritmo que imprima no terminal se o número é par ou ímpar:*/

//const number = 4
for(let N = 0; N < 10; N++){
const number = Math.floor(Math.random()*11)
if(number % 2 === 0){
    console.log(`O número ${number} é par`)
}
if(number % 2 === 1){
    console.log(`O número ${number} é impar`)
}
}
// ...
