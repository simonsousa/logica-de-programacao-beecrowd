var input = require('fs').readFileSync('stdin', 'utf8');
var [X,Y] = input.split('\n').map(Number);
let min = 0;
let max = 0;
if(X > Y){
    max = X;
    min = Y;
}
else{
    max = Y;
    min = X;
}
soma = 0;
for(let i = min+1; i < max; i++){
    if(i % 2 != 0){
        soma = soma + i
    }
}
console.log(soma)