var input = require('fs').readFileSync('stdin','utf-8');
let N = Number(input)//Quadrado e ao Cubo
for(i = 1; i <= N; i++){
    console.log(`${i} ${Math.pow(i,2)} ${Math.pow(i,3)}`)
}