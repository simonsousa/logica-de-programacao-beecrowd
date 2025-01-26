var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
let N = Number(lines.shift())
for(i = 0; i < N; i++){
    let [X,Y] = lines[i].split(' ').map(Number);
        function contarPares(n,qtd){
        soma = 0;
        for(cont=0;cont<=qtd;cont++){
            if(n % 2 == 0){
                soma+=n;
                n+=2
            }else{
                n++
            }
        }
        return soma;
    }console.log(contarPares(X,Y))
}