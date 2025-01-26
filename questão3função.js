var input = require('fs').readFileSync('stdin','utf-8')
var lines = input.split('\n')//função que verifica se uma matriz é escalar ou não

console.table(fazerMatriz(lines))

if(escalar(lines)){
    console.log('a matriz é escalar')
} else {
    console.log('a matriz não é escalar')
}

function escalar(matriz){
    let diagPrinc = matriz[0]
        for(i = 0; i < 4; i++){
            for(j = 0; j < 4; j++){
                let num = Number(matriz.shift())
                    if((i == j) && (num != diagPrinc)){// se a diagonal for diferente da variavel diagPrinc, retorna false
                        return false
                    }
                    if((i != j) && (num != 0)){// se todos os elementos fora da diagonal principal forem diferentes de 0, retorna false
                        return false
                    }
            }
        }
    return true
}

function fazerMatriz(parametro){
    let matriz = []
    for(i = 0; i < 4; i++){
        matriz[i] = []
        for(j = 0; j < 4; j++){
            matriz[i][j] = Number(parametro.shift())
        }
    }
    return matriz
}