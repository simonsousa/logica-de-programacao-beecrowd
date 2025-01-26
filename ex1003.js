var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')
///SOMA SIMPLES
A = Number(lines[0])
B = Number(lines[1])

soma = (A+B)

console.log(`SOMA = ${soma}`)