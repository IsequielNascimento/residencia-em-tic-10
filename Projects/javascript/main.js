const utils = require('./utils');
var prompt = require('prompt-sync')();
const pessoas = [];

while (true) {
    console.log('\nOperações:');
    console.log('1 - Listar Pessoas');
    console.log('2 - Adicionar Pessoa');
    console.log('3 - Remover Pessoa');
    console.log('4 - Editar Pessoa');
    console.log('5 - Encontrar Pessoa');
    console.log('6 - Sair');

    const opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
        case '1':
            utils.listarPessoas(pessoas);
            break;
        case '2':
            utils.adicionarPessoa(pessoas);
            break;
        case '3':
            // Pendente implementar a remoção de pessoa
            break;
        case '4':
            // Pendente implementar a edição de pessoa
            break;
        case '5':
            // Pendente implementar a busca de pessoa
            break;
        case '6':
            console.log('Encerrando o programa.');
            process.exit();
        default:
            console.log('Opção inválida. Tente novamente.');
    }
}
