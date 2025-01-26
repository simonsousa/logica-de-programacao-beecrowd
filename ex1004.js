var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
//PRODUTO SIMPLES
var n1 = parseInt(lines[0])
var n2 = parseInt(lines[1])

PROD = (n1*n2)

console.log(`PROD = ${PROD}`)