var input = require('fs').readFileSync('stdin', 'utf8');
//1174 - Seleção em Vetor I 
let A = input.split('\n').map(Number);
for(i = 0; i < 100;i++){
    if(A[i] <= 10){
        console.log(`A[${i}] = ${A[i].toFixed(1)}`)
    }
}