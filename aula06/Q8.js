/* 8. O código abaixo foi escrito por Ceverino. Sua intenção era mostrar os dados que estão no arquivo users.csv no terminal. Na máquina do Ceverino, o arquivo que o código está escrito e o arquivo users.csv estão localizados no mesmo diretório. Ao executar o código, aparecia a seguinte mensagem no seu terminal: Promise { <pending> }. Dito isso, ajude Ceverino a alcançar seus objetivos alterando o que for preciso no código:
Código:

const fs = require('fs').promises

const usersString = fs.readFile('./users.csv', 'utf-8', 'r')

console.log(usersString)

// ... */

const fs = require('fs').promises;

async function lerArquivo() {
    try {
        const usersString = await fs.readFile('./users.csv', 'utf-8');
        console.log(usersString);
        // Aqui você pode processar os dados como necessário
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro.message);
    }
}

lerArquivo();