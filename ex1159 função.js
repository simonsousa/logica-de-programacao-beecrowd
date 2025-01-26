var input = require('fs').readFileSync('stdin','utf-8')

var lines = input.split('\n').map(Number)//Soma de pares consecutivos

for(i = 0; i < lines.length; i++){
    if(lines[i] == 0){
        break
    } 
    console.log(somarPares(lines[i]))
}
function somarPares(num){
    if(num % 2 != 0){
        num++
    }
    let soma = 0;
    for(j = 0; j < 5; j++){
        soma += num
        num += 2
    }
    return soma
}
