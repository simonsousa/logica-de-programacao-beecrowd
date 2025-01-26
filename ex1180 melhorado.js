var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let N = Number(lines.shift());
let X = lines[0].split(' ').map(Number);
let menor;
let pos;
for(i = 0; i < N; i++){
    menor = Math.min(...X);//Esse operador espalha todos os elementos do array, e retorna o menor valor;
    pos = X.indexOf(menor);//Retorna a posição do menor
}
console.log(`Menor valor: ${menor}\nPosicao: ${pos}`);