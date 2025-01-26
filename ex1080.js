var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n').map(Number)

let maior = 0
let posicao = 1

for(i = 0; i <= 100; i++){
    if(lines[i] > maior){
        maior = lines[i]
        posicao = i
    }
}
console.log(maior)
console.log(posicao+1)
