var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n').map(Number)
//Pares, Impares, Positivos e Negativos
pares = 0
impares = 0
positivos = 0
negativos = 0

for(i = 0; i < 5; i++){
    if(lines[i] % 2 == 0){
        pares++
    }
    if(lines[i] % 2 != 0){
        impares++
    }
    if(lines[i] < 0){
        negativos++
    }
    if(lines[i] > 0){
        positivos++
    }
}
console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)
