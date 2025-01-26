var input = require('fs').readFileSync('stdin','utf-8')
//1070 - Seis Números Ímpares
let X = Number(input);

if(X % 2 == 0){
    X++
}

for(i=0;i<=5;i++){
    console.log(X + i*2)//mostra o valor de X somando com pares(0*2;1*2;2*2;3*2;4*2;5*2)
}
