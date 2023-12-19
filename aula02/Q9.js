//9. A partir do código abaixo, desenvolva um algoritmo que imprima no terminal o resultado do fatorial do número. Por exemplo: 5! = 5 x 4 x 3 x 2 x 1 = 120. Sendo assim, o valor 120 deve ser impresso no terminal:
let number = 5
fatorial = number

console.log(`O fatorial de ${number}: `)

do
{


fatorial --
number *= fatorial


}while(fatorial > 1)
console.log(number)
