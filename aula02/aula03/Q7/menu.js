/*Refaça a questão 04 utilizando Common JS. Você deve criar um arquivo "menu.js" e outro arquivo "operacoes.js" para essa questão.*/
let opera = "subtração"

const calc = require('./operacoes.js')

calc.operacao(opera,4,2)
