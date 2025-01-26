var input = require('fs').readFileSync('./stdin','utf-8')
var lines = input.split('\n').map(parseInt)
//Distância
var d = lines[0]

const X = 60
const Y = 90

tempodistancia = 2 * d

console.log(`${tempodistancia} minutos`)