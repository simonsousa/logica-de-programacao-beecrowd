var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = Number(lines.shift());

let valores = lines[0].split(' ').map(Number);

let menor = valores[0];

let i = 1;

let pos;

while(i < N){
    if(valores[i] < menor){
        menor = valores[i];
        pos = i;
    }
    i++
}
console.log(`Menor valor: ${menor}
Posicao: ${pos}`)