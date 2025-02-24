var input = require('fs').readFileSync('stdin', 'utf8');
//Resolução sem vetor, mas com função;
let N = Number(input);

function removerEspFinal(valor) {//função que remove o espaço final do parametro: valor
    return valor.trimEnd();
}

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
let fibonacciSemEspaço = removerEspFinal(fibonacci);

console.log(fibonacciSemEspaço);

