var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n')//Abaixo da diagonal Principal
let O = lines.shift().trim().toUpperCase()

console.log(sAbaixoDiag(lines).toFixed(1))

function sAbaixoDiag(parametro){
    soma = 0;
    for( i = 0; i < 12; i++){
        for(j = 0; j < 12; j++){
            let num = Number(parametro.shift())//simulando uma matriz
            if(i > j){
                soma += num
            }
        }
    }
    if(O == 'M'){
        let media = (144-12)/2
        soma /= media
    } 
    return soma
}
