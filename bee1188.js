var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n')//area inferior da matriz, desconsiderando as diagonais
let O = lines.shift().trim()

const resultado = areaInferiorDaMatriz(lines)
console.log(resultado.toFixed(1))

function areaInferiorDaMatriz(parametro){
    let contador = 0
    let soma = 0
    for(i = 0; i < 12; i++){
        for(j = 0; j < 12; j++){
            let num = Number(parametro.shift())
            if((i > j) && (i + j > 11)){
                soma = soma + num
                contador += 1
            }
        }
    }if(O == 'M'){
        return soma / contador
    } else {
        return soma
    }
} 