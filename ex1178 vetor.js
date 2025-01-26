var input = require('fs').readFileSync('stdin', 'utf8');

const vetor = input.split('\n').map(parseFloat)

let vlInicial = vetor[0]
for(i = 1; i < 100; i++){
    vetor[i] = vlInicial
    vlInicial/=2
}
for(j = 1; j < 100; j++){
    console.log(`N[${j}] = ${vetor[j].toFixed(4)}`)
}
