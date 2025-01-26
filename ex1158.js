var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n')//Soma de Impares consecutivos III

let N = Number(lines.shift())
for(i = 0; i < N; i++){
    let [X,Y] = lines[i].split(' ').map(Number);
    let soma = 0;
    if(X % 2 == 0){
        X++
    }
    for(total = 0; total < Y; total++){
            soma += X
            X += 2
        }
    console.log(soma)
}

