var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')//EXERCICIO 1181

let linha = Number(lines.shift())
let opcao = lines.shift().trim()

let soma = 0

for (let i=0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        let num = Number(lines.shift())
        if(i==linha){
            soma += num
        }
    }
}

if(opcao=='S'){
    console.log(soma.toFixed(1))
} else {
    let media = soma / 3
    console.log(media.toFixed(1))
}