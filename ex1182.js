var input = require('fs').readFileSync('stdin','utf-8');

var lines = input.split('\n')//coluna na matriz

const C = Number(lines.shift());

const T = lines.shift().trim().toUpperCase();

lines.map(Number)

let valores = lines.map(Number)

let matriz = []

let contd = 0

let soma = 0
for(i = 0; i < 6; i++){
    matriz[i] = []
    for(j = 0; j < 6; j++){
        matriz[i][j] = valores[contd]
        contd++
    }
}console.table(matriz)

for(k = 0; k < matriz.length; k++){
    soma += matriz[k][C]
}
if(T == 'M'){
    soma /= matriz.length
}
console.log(soma.toFixed(1))