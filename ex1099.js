var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')
//Soma de Ímpares Consecutivos II
let N = Number(lines.shift());
for(i = 0; i < N; i++){
    let [X,Y] = lines[i].split(' ').map(Number)
    if(X > Y){
        [X,Y] = [Y,X]
    }
    soma = 0;
    for(j = X+1; j < Y; j++){
        if(j % 2 != 0){
           soma += j
        }
    }console.log(soma)
}