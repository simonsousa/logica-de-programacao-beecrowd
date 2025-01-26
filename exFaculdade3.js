var input = require('fs').readFileSync('./stdin', 'utf8');

var lines = input.split('\n');//primeiro elemento (iterar N vezes)

let N = Number(lines.shift())

for(i = 0; i < N; i++){
    let [X,Y] = lines[i].split(' ').map(Number);//X = numero aleatorio; Y = qtd de vezes que vai contar os pares a partir de X, e X tbm se ele for PAR;
    soma = 0;
    for(j = 0;j <= Y; j++){
        if(X % 2 == 0){
            soma+=X;
            X+=2
        }else{
            X++
        }        
    }console.log(soma)
}