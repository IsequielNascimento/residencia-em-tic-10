function somatorioNumerosImpares(numeros) {
    const resultado = numeros.reduce((soma, numero) => {
        if (numero % 2 !== 0) {
            return soma + numero;
        }
        return soma;
    }, 0);

    return resultado;
}

let numeros = [0, 2, 1, 5, 7, 0, 2, 21, 1, 3];
let resultado = somatorioNumerosImpares(numeros);

console.log(resultado);
