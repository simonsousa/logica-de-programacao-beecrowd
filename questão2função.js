var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split(' ').map(Number)

contarDivisores(lines)

function contarDivisores(parametro){
    for(i = 0; i < parametro.length; i++){
        let div = 0;
        num = parametro[i]
        for(j = 1; j <= num; j++){
            if(num % j == 0){
                div++
            }
        }
        console.log(`${num} tem ${div} divisores`)    
    }
}