var input = require('fs').readFileSync('stdin', 'utf8');
//Fibonacci fácil; na fila para resolver....

//Resolução sem vetor;
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
let fibonnaciSemEspaçoNoFinal = fibonacci.trimEnd();
console.log(fibonnaciSemEspaçoNoFinal);


