const express = require('express')

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

    console.log("teste")
    next()
})

api.get('/pessoas', (request, response) => {
    response.send('teste')
})
// definicao da porta que a api vai escutar
api.listen(3000, () => console.log('A API tá on na porta 3000!'))
