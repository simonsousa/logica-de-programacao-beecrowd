var input = require('fs').readFileSync('stdin','utf-8')

let [hrInicial,hrFinal] = input.split(' ').map(Number)

let duracao;
if(hrFinal > hrInicial){
    duracao = hrFinal - hrInicial
} else {
    duracao = (24 - hrInicial) + hrFinal
}
console.log(`O JOGO DUROU ${duracao} HORA(S)`)

