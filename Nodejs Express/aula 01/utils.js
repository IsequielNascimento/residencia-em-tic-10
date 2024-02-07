const prompt = require('prompt-sync')();

function listarPessoas(pessoas) {
    console.log('Lista de Pessoas:');
    pessoas.forEach((pessoa, index) => {
        console.log(`${index + 1}. Nome: ${pessoa.name}, Email: ${pessoa.email}, Telefone: ${pessoa.phone}`);
    });
}

function adicionarPessoa(pessoas) {
    const nome = prompt('Digite o nome da pessoa: ');
    const email = prompt('Digite o email da pessoa: ');
    const telefone = prompt('Digite o telefone da pessoa: ');

    const pessoa = { name: nome, email: email, phone: telefone };
    pessoas.push(pessoa);

    console.log('Pessoa adicionada com sucesso!');
}


module.exports = {
    listarPessoas,
    adicionarPessoa,
    // Funções pendentes de implementação: removerPessoa, editarPessoa, encontrarPessoa
};