var input = require('fs').readFileSync('stdin','utf-8');

var lines = input.split('\n')//linha na matriz

let L = Number(lines.shift());
let T = lines.shift().trim().toUpperCase()

var lines = lines.map(Number)

let matriz = []
let contd = 0
let soma = 0

for(i = 0; i < 3; i++){
    matriz[i] = []
    for(j = 0; j < 3; j++){
        matriz[i][j] = lines[contd]
        contd++
    }
}
console.table(matriz)

for(k = 0; k < matriz.length; k++){
    soma += matriz[L][k]
}
if(T == 'M'){
     soma /= matriz.length
 }
console.log(soma)