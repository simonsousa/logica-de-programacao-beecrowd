var input = require('fs').readFileSync('./stdin', 'utf8');
//numeros impares
var lines = Number(input)

for(i = 0; i <= lines; i++){
    if(i % 2 != 0){
        console.log(`${i} é impar`)
    }else{
        continue
    }
    
}