var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
//Numeros Pares
i = 0
while(i <= 100){
    if(i % 2 == 0){
        console.log(i)
    }
    i++
}
