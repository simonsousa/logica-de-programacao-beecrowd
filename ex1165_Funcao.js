var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number)//Numero primo;

let N = lines.shift()

for(i = 0; i < N; i++){
    if(localizarPrimo(lines[i])){
        console.log(`${lines[i]} eh primo`)
    }else{
        console.log(`${lines[i]} nao eh primo`)
    }
}
function localizarPrimo(x){
    cont = 0
    for(j = 2; j < x; j++){
        if(x % j == 0){
            cont++
        }
    }if(cont == 0){
        return true;
    }else{
        return false;
    }
}