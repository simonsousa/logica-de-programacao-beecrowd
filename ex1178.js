var input = require('fs').readFileSync('stdin', 'utf8');

const vlInicial = parseFloat(input)//Preenchimento de vetor III

// Cria um vetor com 100 posições
const vetor = new Array(100);

// Preenche a primeira posição do vetor com o valor inicial
vetor[0] = vlInicial;

// Preenche as demais posições com a metade do valor anterior
for (let i = 1; i < 100; i++) {
    vetor[i] = vetor[i - 1] / 2;
}

// Imprime o vetor com 4 casas decimais
for (let i = 0; i < 100; i++) {
    console.log(`N[${i}] = ${vetor[i].toFixed(4)}`);
}