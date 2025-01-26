var input = require('fs').readFileSync('./stdin', 'utf8');
//Resto 2
let N = Number(input)

for(i = 0;i <= 10000;i++){
    if(i % N == 2){
        console.log(i)
    }
}




