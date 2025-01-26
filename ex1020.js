var input = require('fs').readFileSync('./stdin','utf-8')
//idade em dias
var valor = Number(input)

function calcularIdade(idadeEmDias){
    const anos = Math.trunc(idadeEmDias / 365)
    idadeEmDias %= 365

    const meses = Math.trunc(idadeEmDias / 30)
    idadeEmDias %= 30

    const dias = idadeEmDias

    return {
        anos,
        meses,
        dias
    }
}

const idade = calcularIdade(valor)

console.log(`${idade.anos} ano(s)`)
console.log(`${idade.meses} mes(es)`)
console.log(`${idade.dias} dia(s)`)