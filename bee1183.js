var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n')//Acima da diagonal Principal

let O = lines.shift().trim().toLocaleUpperCase()

lines = lines.map(Number)

let matriz = []
let qtdElementos = []
soma = 0

for(i = 0; i < 12; i++){
    matriz[i] = []
    for(j = 0; j < 12; j++){
        matriz[i][j] = lines.shift()
        if(i < j){
            soma += matriz[i][j]
            qtdElementos.push(matriz[i][j])
        }
    }
}
console.table(matriz)

if(O == 'M'){
    //soma = (soma / ((144 - 12)/2))
    soma = soma / qtdElementos.length
}

console.table(qtdElementos)
console.log(soma.toFixed(1))

//Se o indice da linha for menor do que o indice da coluna: vai pegar os elementos acima da diagonal principal