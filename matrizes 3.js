var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n').map(Number)

let sImp = 0
let cImp = 0
let matriz = []
let diagSecundaria = []

//let x = 0;

for (let l=0; l < 3; l++){
    matriz[l] = []
    for(let c=0; c < 3; c++){
        matriz[l][c] = lines.shift()//[x]
        if(matriz[l][c] % 2 != 0){
            sImp += matriz[l][c];
            cImp++
        }
        if(l + c == 2){
            diagSecundaria.push(matriz[l][c])
        }
        //x++
    }
}
let media = sImp/cImp
console.log(media.toFixed(2))
console.table(matriz)
console.log(diagSecundaria)

//diagonal principal: linhas == colunas
//diagonal secundaria: linhas + colunas = N - 1
//diag secundaria: linhas + colunas == 2