var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n').map(Number)

// let menor = lines.shift()
// for(i = 0; i < lines.length; i++){
//     if(lines[i] < menor){
//         menor = lines[i]
//     }
// }
// console.log(menor)

let maior = lines.shift()
for( i = 0; i < lines.length; i++){
    if(lines[i] > maior){
        maior = lines[i]
    }
}console.log(maior)