var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(Number)
//Maior
let A = lines[0]
let B = lines[1]
let C = lines[2]

maiorAB = (A + B + Math.abs(A - B))/2
maiorABC = (maiorAB + C + Math.abs(maiorAB - C))/2

console.log(`${maiorABC} eh o maior`)



