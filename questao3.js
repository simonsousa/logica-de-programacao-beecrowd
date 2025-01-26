var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n')//programa que identifica se uma matriz é escalar ou não

let matriz = []
let diagPrinc = Number(lines[0])

let flag = true
for(i = 0; i < 4; i++){
    matriz[i] = []
    for(j = 0; j < 4; j++){
        matriz[i][j] = Number(lines.shift())
        if((i == j) && (matriz[i][j] != diagPrinc)){
            flag = false
        }
        if((i != j) && (matriz[i][j] != 0 )){
            flag = false
        }
    }
}
console.table(matriz)
if(flag){
    console.log('a matriz é escalar')
}else{
    console.log('a matriz não é escalar')
}
