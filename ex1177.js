var input = require('fs').readFileSync('stdin', 'utf8');

let T = Number(input)//preenchimento de vetor II
let cont = 0

for(i = 0; i < 1000;i++){
    console.log(`N[${i}] = ${cont}`)
    cont += 1
    if(cont == T){
        cont = 0
    }
}

