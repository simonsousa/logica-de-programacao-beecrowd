var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n').map(Number)

let matriz = []
let sImp = 0
let cImp = 0
let x = 0;

for (let l=0; l < 3; l++){
    matriz[l] = []//cria um array dentro da let matriz: [[]]
    for(let c=0; c < 3; c++){
        matriz[l][c] = lines[x]
        if(matriz[l][c] % 2 != 0){
            sImp += matriz[l][c]
            cImp++
        }
        x++
    }
}
console.table(matriz)
let media = sImp/cImp
console.log(media.toFixed(2))