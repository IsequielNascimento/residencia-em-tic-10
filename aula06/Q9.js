/* A partir do código abaixo e dos arquivos users.csv e address.csv, desenvolva um algoritmo que imprima no terminal os dados dos usuários e seus respectivos endereços:
Código:

const fs = require('fs').promises

// ...
Exemplo de saída no terminal:

Usuário: Carlos Júnior
Endereço: Av. José Listeu, 24

Usuário: Joao Vitor
Endereço: Rua Teixeira dos Santos, 456

Usuário: Joao Carlos
Endereço: Rua Raimundo Meneguel, 7899

Usuário: Thiago Alves
Endereço: Rua Lenador Lenha Ra, 10
Observação: tente resolver o problema mantendo a estrutura dos arquivos.

Dicas: pesquise sobre as funções nativas de uma string, como por exemplo split() e replace(). Elas podem te ajudar. */

//.split separa a string em um array de strings, usando o separador especificado.
//.replace substitui uma substring por outra substring.
//.map aplica uma função a cada elemento de um array, retornando um novo array com os elementos alterados.

const fs = require('fs').promises;

async function lerArquivo(caminho) {
    try {
        const dados = await fs.readFile(caminho, 'utf-8');
        return dados.split('\n').map(linha => linha.split(',')); // .split separa a string em um array de strings, usando o separador especificado " , ".
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro.message);
        return [];
    }
}

async function obterUsuarios() {
    const usuarios = await lerArquivo('./users.csv');
    return usuarios.slice(1).map(usuario => ({
        id: usuario[0],
        nome: usuario[1],
        idade: usuario[2]
    }));
}

async function obterEnderecos() {
    const enderecos = await lerArquivo('./address.csv');
    return enderecos.slice(1).map(endereco => ({
        id: endereco[0],
        idUsuario: endereco[1],
        rua: endereco[2],
        numero: endereco[3]
    }));
}

async function imprimirUsuariosEnderecos() {
    const usuarios = await obterUsuarios();
    const enderecos = await obterEnderecos();

    for (const usuario of usuarios) {
        const enderecoUsuario = enderecos.find(endereco => endereco.idUsuario === usuario.id);

        console.log(`Usuário: ${usuario.nome}`);
        console.log(`Endereço: ${enderecoUsuario.rua}, ${enderecoUsuario.numero}\n`);
    }
}

imprimirUsuariosEnderecos();
