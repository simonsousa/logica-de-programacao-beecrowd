var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
//Média 2
notaA = parseFloat(lines[0])
notaB = parseFloat(lines[1])
notaC = parseFloat(lines[2])

const pesoA = 2
const pesoB = 3
const pesoC = 5

media = (notaA * pesoA + notaB * pesoB + notaC * pesoC)/(pesoA + pesoB + pesoC)

console.log(`MEDIA = ${media.toFixed(1)}`)