var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n')//Acima da Diagonal Secundaria
let O = lines.shift().trim()

const resultado = sElementosAcimaDiagSec(lines)
console.log(resultado.toFixed(1))

function sElementosAcimaDiagSec(parametro){
    let soma = 0
    for( i = 0; i < 12; i++ ){
        for( j = 0; j < 12; j++ ){
            let num = Number(parametro.shift())
            if(i + j < 11){
                soma += num
            }
        }    
    }
    if(O == 'M'){
        
        return (soma)/((144-12)/2)
    
    } else {
        
        return soma
    } 
}

