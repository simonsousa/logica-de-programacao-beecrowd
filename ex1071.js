var input = require('fs').readFileSync('stdin', 'utf8');
//Soma de Impares Consecutivos I
let [X,Y] = input.split('\n').map(Number);

let min = 0;
let max = 0;

if(X < Y){
    min = X;
    max = Y;
}else{
    min = Y;
    max = X;
}
let soma = 0;
for(let i = min + 1; i < max; i++){
    if(i % 2 != 0){
        soma += i;
    }
}console.log(soma);