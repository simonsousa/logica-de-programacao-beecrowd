var input = require('fs').readFileSync('./stdin','utf-8')

let valores = input.split('\n').map(Number)
//SOMA 20 VALORES INTEIROS E MOSTRA O RESULTADO DA SOMA
let soma = 0
let i = 0
while(i < valores.length){
    soma += valores[i]
    i++
}

console.log(soma)

