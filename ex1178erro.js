var input = require('fs').readFileSync('stdin', 'utf8');

let vlInicial = Number(input)//Preenchimento de vetor III
let vetor  = []

for(i = 0; i <= 100; i++){
    vetor.push(vlInicial)
    vlInicial/=2
}
console.table(vetor)
    for(j = 0; j <= 100; j++){
        console.log(`N[${j}] = ${vetor[j]}`)
    }