var input = require('fs').readFileSync('stdin','utf-8');

var lines = input.split('\n')//linha na matriz

let L = Number(lines.shift());
let T = lines.shift().trim().toUpperCase()

let resultado = linhaNaMatriz(lines)
if(T == 'M'){
   resultado /= 12
}

console.log(resultado.toFixed(1))

function linhaNaMatriz(matriz){
    soma = 0 
    for(i = 0; i < 12; i++){
        for(j = 0; j < 12; j++){
            let num = Number(matriz.shift())
            if(i == L){
                soma += num
            }
        }
    }
    return soma       
}