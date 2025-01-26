var input = require('fs').readFileSync('stdin','utf8');
//Quadrado de Pares
let N = Number(input);
let par = 0;
for(let i = 1; i <= N; i++){
    if(i % 2 == 0){
        par = i;
        let res = Math.pow(par,2);
        console.log(`${par}^2 = ${res}`);
    }
}
