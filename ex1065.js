var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n').map(Number)

pares = lines.length
i = 0
while(i <= pares){
    if(lines[i] % 2 == 0){
        pares--
    }
    i++
}
console.log(`${pares} valores pares`)