var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n')

let L = Number(lines.shift())
let T = lines.shift().trim().toUpperCase()

lines = lines.map(Number)

matriz = []

let soma = 0
for(i = 0; i < 12; i++){
    matriz[i] = []
    for(j = 0; j < 12; j++){
        matriz[i][j] = lines.shift()
    }
}

for(k = 0; k < matriz.length; k++){
    soma+=matriz[L][k]
}

if(T == 'M'){
    soma = soma / matriz.length
}
console.log(soma.toFixed(1))