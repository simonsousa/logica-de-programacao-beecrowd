var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n').map(Number);

function trocarPos(vetor) {

    let metade = Math.trunc(vetor.length / 2);

    for(i=0; i < metade; i++){
        const temp = vetor[i];
        vetor[i] = vetor[vetor.length - i - 1]
        vetor[vetor.length - i - 1] = temp
    }
    return vetor;
}

const vlsInvertidos = trocarPos(lines);

for(j = 0; j < vlsInvertidos.length; j++){
    console.log(`N[${j}] = ${vlsInvertidos[j]}`)
}
