var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
//Médias Ponderadas
let N = Number(lines.shift())

for(i = 0; i < N; i++){
    [a,b,c] = lines[i].split(' ').map(Number)
    
    media = (a*2 + b*3 + c*5)/10

    console.log(media.toFixed(1))
    }
