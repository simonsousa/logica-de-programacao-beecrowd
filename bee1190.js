var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n')//Area Direita

let O = lines.shift().trim()

const resultado = somarElementosDir(lines)

if(O == 'M'){
    let media = resultado.soma/resultado.contador
    console.log(media.toFixed(1))
}else{
    let soma = resultado.soma
    console.log(soma.toFixed(1))
}

function somarElementosDir(parametro){
    let contador = 0
    let soma = 0
        for(i = 0; i < 12; i++){
            for(j = 0; j < 12; j++){
                num = Number(parametro.shift())
                    if((i < j) && (i + j > 11)){
                        soma += num
                        contador++
                    }
            }
        } return {
            soma,
            contador
        }    
    }
