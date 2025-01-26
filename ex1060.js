var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number)
//Numeros positivos
valores = lines
contador = 0
for(let i = 0; i < valores.length; i++){
    if(valores[i] > 0){
        contador++
    }
}

console.log(`${contador} Valores positivos`)