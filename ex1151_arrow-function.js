var input = require('fs').readFileSync('stdin', 'utf8');
//Resolução sem vetor, mas com arrow function;
let N = Number(input);

let anterior = 0;
let atual = 1;
let proximo;
let fibonacci = "";

for(let i = 0; i < N; i++) {
    fibonacci = fibonacci + anterior;
    fibonacci += ' '
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}
const removerEspaço = (valor) => valor.trimEnd();
let fibonacciSemEspaço = removerEspaço(fibonacci);
console.log(fibonacciSemEspaço);

