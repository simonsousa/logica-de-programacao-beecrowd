var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
//Esfera
var Raio = parseFloat(lines[0])
const pi = 3.14159

volume = (4.0/3 * pi * (Raio*Raio*Raio))

console.log(`VOLUME = ${volume.toFixed(3)}`)
