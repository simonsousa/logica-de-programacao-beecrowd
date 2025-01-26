var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n')//area superior da matriz, desconsiderando as diagonais
let O = lines.shift().trim()

const resultado = areaSuperiorDaMatriz(lines)

console.log(resultado.toFixed(1))

function areaSuperiorDaMatriz(parametro){
    let vetor = []
    let soma = 0;
    for( i = 0; i < 12; i++){
        for( j = 0; j < 12; j++){
            num = Number(parametro.shift())
            if((i < j) && (i + j < 11)){ // condição para pegar a area superior da matriz
                soma += num
                vetor.push(num)
            }
        }
    }if(O == 'M'){
        return soma/vetor.length
    } else {
        return soma
    }   
}


