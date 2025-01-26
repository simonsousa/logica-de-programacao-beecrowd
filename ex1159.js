var input = require('fs').readFileSync('stdin','utf-8')

var lines = input.split('\n').map(Number)//Soma de pares consecutivos

for(i = 0; i < lines.length; i++){
    let X = lines[i]
    if(X == 0){
        break
    }else if(X % 2 != 0){
        X++
    }
    let soma = 0
    for(j = 0; j < 5; j++){
        soma += X
        X += 2
    }
    console.log(soma)
}
