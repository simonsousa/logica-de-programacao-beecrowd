var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n')//Soma de Impares consecutivos III

let N = Number(lines.shift())
for(i = 0; i < N; i++){
    let [X,Y] = lines[i].split(' ').map(Number);
    console.log(somarImpares(X,Y))
}
function somarImpares(a,b){
    let soma = 0;
    if(a % 2 == 0){
        a++
    }
    for(j = 0; j < b; j++){
        if(a[j] % 2 != 0){
            soma += a
            a += 2
        }
    }
    return soma
}

