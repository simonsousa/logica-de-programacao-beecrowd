var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
//Área do círculo
var raio = Number(lines[0]*lines[0])
const pi = 3.14159

A = pi*raio

console.log(`A=${A.toFixed(4)}`)
