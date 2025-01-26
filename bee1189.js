var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n')//Area esquerda da matriz

let O = lines.shift().trim()
const resultado = somarElementos(lines)

if(O == 'M'){
    let media = resultado.soma/resultado.contador 
    console.log(media.toFixed(1))
}else{
    let soma = resultado.soma
    console.log(soma.toFixed(1))
}

function somarElementos(parametro){
    let contador = 0
    let soma = 0
    for(i = 0; i < 12; i++){
        for(j = 0; j < 12; j++){
            let num = Number(parametro.shift())
            if((i > j) && (i + j < 11)){
                soma += num
                contador++
            }
        }
    }
    return {
        soma,
        contador
    }
}