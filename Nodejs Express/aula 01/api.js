const express = require('express')
var fs = require("fs");


const api = express()



// middleware global de todas as rotas derivadas da raíz (domain/)
// api.use('/', (request, response, next) => {
//     console.log('Passando pelo middleware global...')
//     next() // chama o proximo middleware
// })
// // uma rota da api
// api.get('/', (request, response) => {
//     response.send('<h1> Olha meu response ai... </h1> ')
// })
// lógica miniproject

api.use('/pessoas', (request, response, next) => {

    //leitura do pessoas.json
    fs.readFile("pessoas.json", function (err, data) {


        if (err) {
            return console.log("Erro ao ler arquivo");
        }// retornar caso der erro

        //converter para json
        const pessoas = JSON.parse(data);

        console.log(pessoas);
    });

    next()
})

api.get('/pessoas', (request, response) => {
    response.send('teste')
})
// definicao da porta que a api vai escutar
api.listen(3000, () => console.log('A API tá on na porta 3000!'))

