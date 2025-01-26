var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')//EXERCICIO 1183

let opcao = lines.shift().trim()

let soma = 0

for (let i=0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        let num = Number(lines.shift())
        if(i<j){
            soma += num
        }
    }
}
if(opcao=='S'){
    console.log(soma.toFixed(1))
} else {
    let media = (9-3)/2
    soma = soma/media
    console.log(soma.toFixed(1))
}


// }else if(i + j < 4 - 1){//condição para os elementos acima da diag. secundaria
//     elementosAcima.push(matriz[i][j])
// }else if(i + j > 4 - 1){//condição para os elementos abaixo da diag. secundaria
//     elementosAbaixo.push(matriz[i][j])
// }