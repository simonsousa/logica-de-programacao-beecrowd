var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n').map(Number);

let metade = Math.trunc(lines.length/2) 

for(i = 0; i < metade; i++){
    let caixa = lines[i];
    lines[i] = lines[lines.length - i - 1]
    lines[lines.length - i - 1] = caixa;
}

const vlsInvertidos = lines;

for(j = 0; j < vlsInvertidos.length; j++){
    console.log(`N[${j}] = ${vlsInvertidos[j]}`)
}