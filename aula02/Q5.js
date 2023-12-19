////Questão 05 A partir do código abaixo, desenvolva um algoritmo que imprima no terminal se o número sorteado está entre os números 5 e 10, incluindo ambos:
const number = Math.floor(Math.random() * 11) // sorteia um número inteiro entre 0 e 10 (incluindo 0 e 10)
////////////>
/*The JavaScript Math object allows you to perform mathematical tasks on numbers.
The Math object is static.

All methods and properties can be used without creating a Math object first.
The syntax for Math any methods is : Math.method(number)
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
//////////////////<
*/
if(number >= 5 && number <= 10){
    console.log(`${number} foi sorteado`)
}else{
    console.log("Infelizmento seu número não foi sortado", number)
}

// ...
