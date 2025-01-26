var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n').map(Number)
//EXTREMAMENTE BÁSICO

A = lines.shift()
B = lines.shift()

X = A + B

console.log(`X = ${X}`)
